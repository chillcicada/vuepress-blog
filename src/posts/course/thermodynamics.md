---
title: Thermodynamics
date: 2024-01-01
category:
  - course
  - thermodynamics
  - physical chemistry
tag:
  - note
---

Maybe this should be renamed to "Physical Chemistry"?

WIP and keep updating along with my ~~review~~ preview.

<!--more-->

## The first law of thermodynamics

Essentially, the first law of thermodynamics means the relationship between path functions($q,~w$) and state functions($U$).

$$
\Delta U = q - w
$$

And its differential form is:

$$
\mathrm dU = \delta q - \delta w
$$

In this equation, $U$ is the internal energy, $q$ is the heat, and $w$ is the work.

- $w$ and $q$ are both path functions, which means that they depend on the path taken to get from the initial state to the final state.
- $U$ is a state function, which means that it only depends on the initial and final states.

## The second law of thermodynamics

Essentially, the second law of thermodynamics describes the difference of heat and work and it expresses the calculation of the reversible heat change of the system.

$$
\Delta S = \frac{\delta q_{re}}{T} \geq \frac{\delta q}{T}
$$

And its differential form is:

$$
\delta q_{re} = T\mathrm dS
$$

The equation means that the entropy of the universe is always increasing.

So how to calculate the work of the system?

Well, actually the calculation of work is given by the work definition.

For the volume work, the work is:

$$
\mathrm dw_V = -P_{ex}\mathrm dV
$$

All the work can be defined by the volume work and the non-volume work.

$$
\mathrm dw = \mathrm dw_V + \mathrm dw_{non-V}
$$

When there is no non-volume work and in the path that $P_{ex}$ equates $P$, the work is:

$$
\mathrm dw = -P\mathrm dV
$$

## Formula derivation

### Basic formula

Definition of $H,~A,~G$.

$$
\begin{aligned}
H &= U + PV \\
A &= U - TS \\
G &= H - TS
\end{aligned}
$$

Do partial derivative (also expresses the physical quantity corresponds to the function of whom.)

$$
\begin{aligned}
\mathrm dU &= \left(\frac{\partial U}{\partial S}\right)_V \mathrm dS + \left(\frac{\partial U}{\partial V}\right)_S \mathrm dV \\
\mathrm dH &= \left(\frac{\partial H}{\partial S}\right)_P \mathrm dS + \left(\frac{\partial H}{\partial P}\right)_S \mathrm dP \\
\mathrm dA &= \left(\frac{\partial A}{\partial T}\right)_V \mathrm dT + \left(\frac{\partial A}{\partial V}\right)_T \mathrm dV \\
\mathrm dG &= \left(\frac{\partial G}{\partial T}\right)_P \mathrm dT + \left(\frac{\partial G}{\partial P}\right)_T \mathrm dP
\end{aligned}
$$

For a simple path, combine the first law of thermodynamics and the second law of thermodynamics. Also, the Gibbs equations express the quantitative relationship between the state functions.

> Simple path: no expresses the calculation of the reversible heat change of the system.(non-volume work and can be reversed)

$$
\begin{aligned}
\mathrm dU &= T\mathrm dS - P\mathrm dV \\
\mathrm dH &= T\mathrm dS + V\mathrm dP \\
\mathrm dA &= -S\mathrm dT - P\mathrm dV \\
\mathrm dG &= -S\mathrm dT + V\mathrm dP
\end{aligned}
$$

When using its integral form, you must design a reversible path.

### Maxwell's equations

Maxwell's equations are used to convert the change in entropy of a reversible process into a conventional equation, we can use the integral form of entropy change.

$$
\begin{aligned}
\left(\frac{\partial T}{\partial V}\right)_S &= -\left(\frac{\partial P}{\partial S}\right)_V \\
\left(\frac{\partial T}{\partial P}\right)_S &= \left(\frac{\partial V}{\partial S}\right)_P \\
\left(\frac{\partial S}{\partial V}\right)_T &= \left(\frac{\partial P}{\partial T}\right)_V \\
\left(\frac{\partial S}{\partial P}\right)_T &= -\left(\frac{\partial V}{\partial T}\right)_P
\end{aligned}
$$

### Physical properties

Heat capacity and heat capacity is the function of $T$.

$$
C = \frac{\mathrm dq}{\mathrm dT}
$$

For constant volume:

$$
\mathrm dV = 0 \Rightarrow \mathrm dU = \delta q \\
C_V = \left(\frac{\partial Q}{\partial T}\right)_V = \left(\frac{\partial U}{\partial T}\right)_V
$$

For constant pressure:

$$
\mathrm dP = 0 \Rightarrow \mathrm dH = \delta q \\
C_P = \left(\frac{\partial Q}{\partial T}\right)_P = \left(\frac{\partial H}{\partial T}\right)_P
$$
