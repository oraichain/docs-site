---
id: become-a-provider
title: Become a provider

---

## Step by step guide to create a data source or test case or oracle script that can work on Oraichain:

1. As Oraichain currently supports only shell script, a provider cannot use popular programming languages such as Python, Java to develop their services.

2. For an oracle script, the number of input arguments must be at least two. The first one: ***$1*** is reserved for execution type of the script. For now, the validators only accept three execution types: ***aiDataSource***, ***testcase***, and ***aggregation***. Other types will not be read, and unexpected behaviours may happen. The first type collects all the AI data source names that the oracle wants to execute, while the second type gets all the test cases it prefers. The last type, on the other hand, is the business logic of the oracle script, which is responsible for processing all the results retrieved from the data sources. Indeed, all the results are put in a string passed to the second argument ***$2*** with a delimiter, which is ***-***, and it is the oracle script's job to process these values to come up with a final result to be returned back to Oraichain. An example of an oracle script that is syntaxtically correct is below:

```
#!/bin/bash

# the number of parameters are fixed depending on the total data sources run
route() {
  if [[ $1 = "aiDataSource" ]]
  then 
    echo "crypto_compare_btc coindesk_btc coingecko_btc" # return names of the data sources
  elif [[ $1 = "testcase" ]] # return names of the test cases
  then
    echo "testcase_price"
  elif [[ $1 = "aggregation" ]] # $2 is true output, $3 is expected output
  then
    # collect input string with a delimiter of each data source value separated with a '-' delimiter
    IFS='-' read -ra array <<< "$2"
    aggregation_result=0
    size=0
    # here is the algorithm for each oracle script. This should be different based on the oscript
    for i in "${array[@]}"; do
      let "size+=1"
      # process "$i"
      aggregation_result=`echo $aggregation_result + $i | bc`
      #$aggregation_result = $aggregation_result + $i
    done
    temp=$aggregation_result
    # scale=2 allows division with floating points (two decimals)
    aggregation_result=$(echo "scale=2; ($temp) / $size" |bc) # |bc allows adding two floating point numbers
    echo "$aggregation_result"
  else
    echo 0
  fi
}

route_name="$(route $1 $2 $3 $4)"
echo $route_name
```

3. For a data source, the job is much simpler with no input arguments, as the providers only need to call their API using a cURL request. However, the output of a data source must be a string, not an object. A simple data source is given as follows:

```
#!/bin/bash
curl -s -X GET "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD" -H "accept: application/json" | jq -r ".USD"
```

The "jq" command is used to parse the JSON response of the request to collect only a string.

4. For a test case, it must have at least three input arguments. The first one is used for the name of the data source that it needs to run, while the second and the third are the input and expected output respectively provided by the user. In some cases, the user's input may not be necessary, but we still need to reserve it in other cases. The expected output should be compared to the output of the data source, and if the output does not meet the requirement (of the test case) then we return ***null***. This is very important, as currently, Oraichain only checks if the output of a test case is empty or equal to null. If it passes these conditions, the result from data source will be collected and considered valid. An example of a test case is:

```
#!/bin/bash

# $2 should be reserved for test case input if necessary

func_result="`/bin/bash .oraifiles/"$1"`"
# $3 is the expected output
expected_output=$(echo "$3" |base64 --decode)
diff=$(echo "scale=2; $func_result - $expected_output" |bc) # |bc allows adding two 
# allow compare integer with float
if awk 'BEGIN {exit !('$diff' < 10000)}';
then 
  echo $func_result
else
  echo null
fi
```

5. In order to deploy an oracle script on Oraichain, all sufficient data sources and test cases provided in the script need to be on the network already. Another note is: if a data source or a test case change its name, the oracle script deployer must manually edit his script. Otherwise, the script will not run properly because it cannot find the correct data source or test case.