---
title: 01. Hola món!
description: Preparació d'un projecte Java simple amb Gradle
---

En aquesta primera activitat prepararem un projecte Java molt simple, fent servir Gradle
per automatitzar la tasca de compilació.

## Instruccions

1. Creeu una nova carpeta de treball per realitzar l'activitat

```sh
mkdir -p ~/devel/dam1/workshops/ides/activitats/01-hola-mon && cd $_
```

2. Creeu un nou projecte amb Gradle

```sh
gradle init
```

3. En aquest punt l'assistent de configuració us demanarà que trieu una sèrie d'opcions per preparar el projecte.
Per aquesta activitat seleccioneu les opcions indicades:

```
Select type of project to generate: 1 (basic)
Select build script DSL: 1 (Kotlin)
Project name: hola-mon
Generate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no] no
```

4. Creeu l'estructura de carpetes del projecte

```sh
mkdir -p src/main/java/demo
```

5. Creeu el fitxer de codi `HolaMon.java`

```sh
touch src/main/java/demo/HolaMon.java
```

6. Obriu-lo amb el vostre editor i escriviu el codi següent

```java
// src/main/java/demo/HolaMon.java
package demo;

public class HolaMon {
    public static void main (String[] args) {
        String salutacio = fesSalutacio();
        System.out.println(salutacio);
    }

    public static String fesSalutacio() {
        return "Hola món!";
    }
}
```

7. Editeu la configuració del *build* amb el contingut següent:

```kotlin
// build.gradle.kts

plugins {
 java
}

tasks.named<Jar>("jar") {
 manifest {
  attributes["Main-Class"] = "demo.HolaMon"
 }
}
```

8. Prepareu el programa per a la seva execució

```sh
./gradlew build
```

9. Finalment, executeu el programa i comproveu que el procés s'ha completat amb èxit
```sh
java -jar ./build/libs/hola-mon.jar
```
