
describe('Notify',function(){
    var a_handler;
    var b_handler;

    function a(event){
        console.log(event)
        a_handler = event.message;
    }
    function b(event){
        b_handler = event.message;
    }

    beforeEach(function(){
        a_handler  = undefined;
        b_handler = undefined;
    })

    it("should notify all handler on call",function(){
      var action = build_action("call").with({message:"I am called"})
                        .notify(a,b);
      action();
      expect(a_handler).toBe("I am called");
      expect(b_handler).toBe("I am called");
    });
})


