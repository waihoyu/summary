async function timeout(ms) {
    await new Promise((resolve) => {
    //   setTimeout(resolve, ms);
      return 1
    });
  }
  
  async function asyncPrint(value, ms) {
     timeout(ms);
    console.log(value);
  }
  
  console.log(asyncPrint('hello world', 50))