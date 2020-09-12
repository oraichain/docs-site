---
id: DecentralizedValidatorSampling
title: Decentralized Validator Sampling

---

## Decentralized Validator Sampling

The validators are chosen in turns based on their voting powers. Each validator has a turn point, which is increased after every newly committed block. A validator with a high voting power will have its point increased faster than other validators with lower voting powers. As a result, validators with a large amount of stakes will have more turns of running oracle scripts and collecting rewards. The top k-validators that has the highest turn points with k is the number of validators given by users will execute the oracle scripts before reseting those points to zero.

However, there is a maximum value of how fast the turn point can increase after each successful block. This prevents large staked validators to entirely dominate the queue and give validators with low tokens staked a better chance to execute the scripts. 