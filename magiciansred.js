module.exports = function(RED) {
    var irMagician = require('irmagician')

    function play(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            irMagician.play()
        });
    }
    RED.nodes.registerType("irMagician play", play);

    function write(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.file = config.file;
        this.on('input', function(msg) {
            console.log(config);
            console.log(this.file);
            irMagician.write(this.file)
        });
    }
    RED.nodes.registerType("irMagician write", write);
}