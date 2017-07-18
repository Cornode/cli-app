# cornode CLI Wallet

Command line interface (CLI) app that acts as an cornode wallet and node management tool.

## Installation

You need:
1. [Node.js](https://nodejs.org) installed on your matching.  
1. A functioning [cornode node](https://github.com/cornodeledger/iri) to connect to.  The cornode node can be on the same computer as the CLI, but the CLI can work with remote nodes as well if they are configured using `--remote`.

To install:
`npm install -g cornode-cli-app`

## Usage

After installing, execute the CLI:

`cornode-cli`

This will connect to a node on the same computer as the CLI by default.  If your node is in another location use the `node` command to switch to the remote computer.  Make sure the remote node is configured to allow remote connections.

For a list of all the commands available in the CLI use `help`.
