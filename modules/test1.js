class TestModule1 {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.dispatch.hook(null, () => {
            console.log('This is the firehose');
        });
        this.dispatch.hook('!test', () => {
            console.log('this is a test command.');
        });
    }
    
}

module.exports = TestModule1;