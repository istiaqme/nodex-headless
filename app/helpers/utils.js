module.exports = {
    simpleValidate: function (text) {
        if(text !== "Istiaq") throw new Error("Istiaq is not defined.")
        return true;
    }
}