//We need to deply it to the block chain right 
// so we require a secondary migration
const Migrations = artifacts.require("DStorage");


module.exports = function(deployer) {
	//Now we deploy ;-)
	deployer.deploy(Migrations);
};

