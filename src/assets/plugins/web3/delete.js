abiDefinition = JSON.parse(compiledCode.contracts[':ReferralTree'].interface
Contract = _web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':ReferralTree'].bytecode

deployedContract = Contract.new(question,{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
deployedContract.address

contractInstance = Contract.at(deployedContract.address)
contractInstance.attemptAnswer("I think the answer is 1", {from: "0x5b1869d9a4c187f2eaa108f3062412ecf0526b24"})

web3.eth.getTransactionReceipt(hashString [, callback])

web3.eth.sendTransaction({from: web3.eth.accounts[0], to: "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab", value:3})

web3.eth.getBlock("earliest",
  function(e, d) {
    transactions.push.apply(transactions, d.transactions)
  }
)

web3.eth.getBlock("latest",
  function(e, d) {
    transactions.push.apply(transactions, d.transactions)
  }
)

for (var i = 0; i <= 10; i++) {
  web3.eth.getBlock(i,
    function(e, d) {
      transactions.push.apply(transactions, d.transactions)
    }
  )
}

transactions.forEach(
  function(e) {
    web3.eth.getTransactionReceipt(e,
      function(err, f) {
        console.log(f.contractAddress)
      }
    )
  }
)
