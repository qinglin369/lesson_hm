let objWithStringValue = {
    toString: function() {
      return "hello"
    }
  }
  
  console.log("情况一："+String(objWithStringValue))

  let objWithValueOf = {
    toString: function() {
      return this
    },
    valueOf : function(){
        return "hello"
    }
  }

  console.log("情况二："+String(objWithValueOf))

  let objWithoutPrimitive = {
    toString: function() {
        return this
      },
      valueOf : function(){
          return this
      }
  }
  try{
      console.log("情况三"+String(objWithoutPrimitive))
  }catch(e){
      console.log(e)
  }
