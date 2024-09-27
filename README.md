# Johnemon™ World Game

## Overview

This is a console-based game where you play as a Johnemon™ Master. Your goal is to capture, train, and battle with your Johnemon™ creatures in the Johnemon™ World. The game allows you to save and load your progress, heal and revive your Johnemon™, and engage in exciting battles against wild Johnemon™.

## Features

- **Create or Load Game:** Start a new game or load a previously saved game.
- **Johnemon™ Master:** You can manage your Johnemon™ collection, heal them, and use items such as JOHNEBALLS to catch new wild Johnemon™.
- **Johnemon™ Battles:** Fight wild Johnemon™ in the Johnemon™ Arena, attack, or try to catch them.
- **Evolution:** Johnemon™ can evolve as they gain experience.
- **Game Saving:** Automatically saves game progress to a JSON file.

## Classes

### 1. `JohnemonMaster`
Represents a Johnemon™ Master with attributes like:
- **Name**: The master’s name.
- **Johnemon Collection**: A collection of Johnemon™ owned by the master.
- **Healing Items**: Number of healing items available.
- **Revive Items**: Number of revive items available.
- **JOHNEBALLS**: Used to catch wild Johnemon™.

### 2. `Johnemon`
Represents a Johnemon™ with attributes like:
- **Name**: A generated name.
- **Level**: The current level of the Johnemon™.
- **Experience Meter**: Tracks the Johnemon's progress toward evolution.
- **Attack/Defense Range**: Used in battles.
- **Health Pool**: Represents Johnemon's total health.

### 3. `JohnemonWorld`
Handles the world of Johnemon™ including:
- **Days**: Keeps track of the in-game day.
- **Logs**: Tracks important events like battles or evolutions.

### 4. `JohnemonArena`
Handles battles between Johnemon™ Masters and wild Johnemon™.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/JohnemonWorldGame.git
   cd JohnemonWorldGame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the game:
   ```bash
   node Game.js
   ```

## Usage

When you start the game, you'll be prompted to either load a previous game or start a new one. If you start a new game, you will choose your first Johnemon™ and begin exploring the Johnemon™ world. You can engage in battles, heal your Johnemon™, or catch new ones!

### Commands

- **Attack**: Attack a wild Johnemon™ during a battle.
- **Try to Catch**: Attempt to catch a wild Johnemon™ using a JOHNEBALL.
- **Run Away**: End the battle and leave.
- **Heal**: Restore a Johnemon's health to its original value.
- **Revive**: Bring a fainted Johnemon™ back to life with full health.

## Save System

The game automatically saves your progress after important events such as catching a Johnemon™ or finishing a battle. The save state is stored in a `save.json` file and can be loaded when restarting the game.

## Example

When the game starts, you'll be presented with a choice to load or start a new game. If starting fresh, you'll pick one of three randomly generated Johnemon™ and begin your adventure!

```bash
What's your name? John
Welcome John, let's choose your first Johnemon™.
1. Name: Johnette, Level: 1, Health: 20
2. Name: Sebastien, Level: 1, Health: 18
3. Name: Thomith, Level: 1, Health: 22
Choose your Johnemon™: 2
You've chosen Sebastien!
```

