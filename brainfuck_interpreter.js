function brainLuck(instructionString, inputString) {
  var memoryTape = new Array(10000).fill(0);
  var instructionArray = Array.from(instructionString);
  var characterArray = Array.from(inputString);
  var outputString = "";
  var dataPointer = 0;
  var instructionPointer = 0;
  var inputPointer = 0;
  var currentData = memoryTape[dataPointer];
  var currentInstruction = instructionArray[instructionPointer];
  var currentInputChar = characterArray[inputPointer];
  var currentInputCode = currentInputChar;
  var openBrackets = 0;

  function incrementDataPointer() {
      dataPointer++;
  }
  function incrementDataPointerTest() {
    function test1() {
      memoryTape = [0,1,2,3];
      dataPointer = 0;
      for (let i=0; i<=memoryTape.length; i++) {
        console.log(dataPointer, currentData)
        incrementDataPointer();
      };
    };
  };
  //uncomment to run INCREMENT DATA POINTER unit tests
  //incrementDataPointerTest();    

  function decrementDataPointer() {
      dataPointer--;
  }
  function decrementDataPointerTests() {
    console.log(`DECREMENT DATA POINTER tests ---------------------`);
    function test1() {
      console.log("DECREMENT DATA POINTER test 1 ------------");
      memoryTape = [4,5,6,7,8,9];
      dataPointer = 0;
      for (let i=0; i<=memoryTape.length; i++) {
        console.log(dataPointer, currentData);
        setNewCurrentData();
        console.log(dataPointer, currentData)
      };
    console.log("--------------------------------------");
  };
  function test2() {
    console.log("DECREMENT DATA POINTER test 2 ------------");
    memoryTape = [1];
    dataPointer = 0;
    for (let i=0; i<=memoryTape.length; i++) {
      console.log(dataPointer, currentData)
      incrementDataPointer();
      console.log(dataPointer, currentData)
    };
    console.log("--------------------------------------");
    };
  //comment or uncomment to run specific tests
  test1();
  test2();
  }
  //uncomment to run DECREMENT DATA POINTER unit tests
  //decrementDataPointerTests();

  function incrementInstructionPointer() {
    instructionPointer++;
  }
  function incrementInstructionPointerTest() {
    function test1() {
      instructionArray = ["<",">","-","]"];
      instructionPointer = 0;
      for (let i=0; i<=instructionArray.length-1; i++) {
        setCurrentInstruction();
        console.log(instructionPointer, currentInstruction)
        incrementInstructionPointer();
      };
    }
    test1();
  }
  //uncomment to run INCREMENT INSTRUCTION POINTER unit tests
  //incrementInstructionPointerTest();

  function decrementInstructionPointer() {
    instructionPointer--;
  }
  function decrementInstructionPointerTest() {
    console.log(`DECREMENT INSTRUCTION POINTER TESTS ---------------------`);
    function test1() {
      instructionArray = ["<","-","+",">","[","-"];
      instructionPointer = 5;
      for (let i=0; i<=instructionArray.length-2; i++) {
        console.log(`DECREMENT INSTRUCTION POINTER TEST ${i} ------------`);
        console.log(`CURRENT VALUES:
          Instruction Array: ${instructionArray}
          Instruction Pointer: ${instructionPointer}
          Current Instruction: ${currentInstruction}`
        );
        decrementInstructionPointer();
        setCurrentInstruction();
        console.log(`RESULT VALUES:
          Instruction Pointer: ${instructionPointer}
          Current Instruction: ${currentInstruction}`
        );
      }
    console.log("--------------------------------------");
    };
    test1();
  }
  //uncomment to run DECREMENT INSTRUCTION POINTER unit tests
  //decrementInstructionPointerTest();

  function setCurrentInstruction() {
    currentInstruction = instructionArray[instructionPointer];
  }
  function setCurrentInstructionTests() {
    console.log("SET CURRENT INSTRUCTION TESTS -----------")
    function test1() {
      console.log("SET CURRENT INSTRUCTION TEST 1 --------")
      instructionArray = ["<","-","+",">","[","-"];
      instructionPointer = 0;
      for (let i=0; i<=instructionArray.length-2; i++) {
        console.log(`LOOP: ${i}`)
          if (i === 0) {
            setCurrentInstruction();
            console.log(`CURRENT VALUES:
              Current Loop: ${i}
              Current Instruction Pointer: ${instructionPointer}
              Current Instruction Array: ${instructionArray}
              Current Instruction: ${currentInstruction}`
            );
            incrementInstructionPointer();
            setCurrentInstruction();
            console.log("Incremented instructionPointer and set new currentInstruction")
            console.log(`RESULT VALUES:
              Current Loop: ${i}
              Current Instruction Pointer: ${instructionPointer}
              Current Instruction Array: ${instructionArray}
              Current Instruction: ${currentInstruction}`)
          } else {
            console.log(`CURRENT VALUES:
              Current Loop: ${i}
              Current InstructionPointer: ${instructionPointer}
              Current Instruction Array: ${instructionArray}
              Current Instruction: ${currentInstruction}`
            );
            incrementInstructionPointer();
            setCurrentInstruction();
            console.log("Incremented instructionPointer and set new currentInstruction")
            console.log(`RESULT VALUES:
              Current Loop: ${i}
              Current Instruction Pointer: ${instructionPointer}
              Current Instruction Array: ${instructionArray}
              Current Instruction: ${currentInstruction}`)
          }
        }
      
    }
    test1();
  }
  //uncomment to run SET CURRENT INSTRUCTION unit tests
  //setCurrentInstructionTests();

  function setNewCurrentInstruction() {
    incrementInstructionPointer();
    setCurrentInstruction();
  }
  function setNewCurrentInstructionTest() {
    function test1() {
      instructionArray = ["<","-","+",">","[","-"];
      instructionPointer = 0;
      console.log(`Current Instruction Array: ${instructionArray}`);
      for (let i=0; i<=instructionArray.length; i++) {
        if (instructionArray[instructionPointer] != null) {
          setCurrentInstruction();
          console.log(`Setting current Instruction: ${currentInstruction}`);
          incrementInstructionPointer();
        } else {
          break;
        }
      }
    }
    test1();
  }
  //uncomment to run SET NEW CURRENT INSTRUCTION unit tests
  //setNewCurrentInstructionTest();

  function setCurrentInputChar() {
    currentInputChar = characterArray[inputPointer];
  }
  function setCurrentInputCharTests() {
    function test1() {
      console.log("")
      console.log(`SET CURRENT INPUT CHARACTER TEST 1 -----------`);
      currentInputChar = "x";
      characterArray = ["A","n","y","w","a","y"];
      inputPointer = 3;
      console.log(`STARTING VALUES -----------------------
                    Current Input Character: ${currentInputChar}
                    Current Character Array: ${characterArray}
                    current inputPointer: ${inputPointer}`
      )
      setCurrentInputChar();
      console.log(`RESULT VALUES -----------------------
                    Current Input Character: ${currentInputChar}
                    Current Character Array: ${characterArray}
                    current inputPointer: ${inputPointer}`
      )
    }
    function test2() {
      console.log("")
      console.log(`SET CURRENT INPUT CHARACTER TEST 2 -----------`);
      currentInputChar = "x";
      characterArray = ["Y","a","r","n"];
      inputPointer = 3;
      console.log(`STARTING VALUES -----------------------
                    Current Input Character: ${currentInputChar}
                    Current Character Array: ${characterArray}
                    current inputPointer: ${inputPointer}`
      )
      setCurrentInputChar();
      console.log(`RESULT VALUES -----------------------
                    Current Input Character: ${currentInputChar}
                    Current Character Array: ${characterArray}
                    current inputPointer: ${inputPointer}`
      )
      console.log("--------------------------------------")
    }
    function test3() {
      console.log("")
      console.log(`SET CURRENT INPUT CHARACTER TEST 3 -----------`);
      currentInputChar = "x";
      characterArray = ["B","o","y"];
      inputPointer = 0;
      console.log(`STARTING VALUES -----------------------
                    Current Input Character: ${currentInputChar}
                    Current Character Array: ${characterArray}
                    current inputPointer: ${inputPointer}`
      )
      setCurrentInputChar();
      console.log(`RESULT VALUES -----------------------
                    Current Input Character: ${currentInputChar}
                    Current Character Array: ${characterArray}
                    current inputPointer: ${inputPointer}`
      )
      console.log("--------------------------------------")
    }
    test1();
    test2();
    test3();
  }
  //uncomment to run SET CURRENT INPUT CHARACTER unit tests
  //setCurrentInputCharTests();

  function setNewCurrentInputChar() {
    console.log("setNewCurrentInputChar()");
      incrementInputPointer();
      setCurrentInputChar();
  }
  function setNewInputCharTests() {
    function test1() {
      console.log("")
      console.log(`SET NEW CURRENT INPUT CHARACTER TEST 1 -----------`);
      characterArray = ["A","n","y"];
      inputPointer =0;
      currentInputChar = "A";
      for (let i=0; i <= characterArray.length-1; i++) {
        console.log("");
        console.log(`LOOP: ${i} --------------------`)
        console.log(`STARTING VALUES:
                      Current Input Character: ${currentInputChar}
                      Current inputPointer: ${inputPointer}`
        );
        setNewCurrentInputChar();
        console.log(`RESULT VALUES:
                      Current Input Character: ${currentInputChar}
                      Current inputPointer: ${inputPointer}`
        );
        console.log("--------------------------------------------------")
      }
    }
    function test2() {
      
    }
    function test3() {
      
    }
    test1();
    test2();
    test3();
  }
  //uncomment to run SET NEW CURRENT INPUT CHARACTER unit tests
  //setNewInputCharTests();

  function incrementInputPointer() {
      inputPointer++;
  }    
  function incrementInputPointerTests() {
    function test1() {
      characterArray = ["h","e","l","l","o"];
      inputPointer = 0;
      for (let i=0; i<=characterArray.length; i++) {
        console.log(inputPointer, currentInputChar)
        setNewCurrentInputChar();
      };  
    };  
  }
  //uncomment to run INCREMENT INPUT POINTER unit tests
  //incrementDataPointerTests(); 
    
  function setCurrentData() {
      currentData = memoryTape[dataPointer];
  }    
  function setCurrentDataTests() {
    function test1() {
      memoryTape = [34];
      dataPointer = 0;
      currentData = 0;
      console.log(`TEST 1 STARTING VALUES ------------------
                    Current Data: ${currentData}`
      );
      setCurrentData();
      console.log(`TEST 1 RESULT VALUES ------------------
                    Current Data: ${currentData}`
      );
    }
    function test2() {
      memoryTape = [255];
      dataPointer = 0;
      currentData = 4;
      console.log(`TEST 2 STARTING VALUES ------------------
                    Current Data: ${currentData}`
      );
      setCurrentData();
      console.log(`TEST 2 RESULT VALUES ------------------
                    Current Data: ${currentData}`
      );
    }
    test1();
    test2();
  }
  //uncomment to run SET CURRENT DATA unit tests
  //setCurrentDataTests();
     
  function setNewCurrentData() {
      incrementDataPointer();
      setCurrentData();
  }    
  function setNewCurrentDataTests() {
    function test1() {
      memoryTape = [1,2];
      dataPointer = 0;
      currentData = 1;
      console.log(`Current Data: ${currentData}`);
      setNewCurrentData();
      console.log(`Current Data: ${currentData}`)
    }
    function test2() {
      memoryTape = [1,2,3];
      dataPointer = 0;
      currentData = 1;
      console.log(`Current Data: ${currentData}`);
      incrementDataPointer();
      setNewCurrentData();
      console.log(`Current Data: ${currentData}`)
    }
    test1();
    test2();
  }
  //uncomment to run SET NEW CURRENT DATA unit tests
  //setNewCurrentDataTests();

  function setCurrentInputCode() {
      currentInputCode = characterArray.charCodeAt(inputPointer);
      console.log(`Set current input code to ${currentInputCode}`)
  }
  function setCurrentInputCodeTests() {
      function test1() {
        characterArray = ["C","o","d","e","w",'a','r',"s"];
        inputCharacter = 0;
        setCurrentInputCode();
        console.log(currentInputCode);
      }
      test1();
  }
  //uncomment to run SET CURRENT INPUT CODE unit tests
  //setCurrentInputCodeTests();

  function inputCharAsAsciiCode() {
      memoryTape[dataPointer] = currentInputChar.charCodeAt();
  }
  function inputCharAsAsciiCodeTests() {
      function test1() {
        console.log("");
        console.log("--- INPUT CHAR AS ASCII CODE: TEST 1 ---");
        memoryTape = [0,0,0,0,0,0,0,0];
        dataPointer = 0;
        inputPointer = 0;
        inputString = "Codewars";
        characterArray = ["C","o","d","e","w",'a','r',"s"];
        loopCount = 0;
        for (let i=0; i<=characterArray.length-1; i++) {
          loopCount++;
          console.log("");
          console.log(`--------------------LOOP COUNT: ${loopCount}`);
          setCurrentInputChar();            console.log(`STARTING VALUES:
            Input String: (${inputString})
            Current Input Character: (${currentInputChar})
            Current Input Code: (${currentInputChar.charCodeAt()})
            Current memoryTape: (${memoryTape})
            Current data: (${currentData})`
          );
          inputCharAsAsciiCode();
          setNewCurrentData();
          console.log(`RESULT VALUES: 
            Current Input Character: (${currentInputChar})
            Current Input Code: (${currentInputChar.charCodeAt()})
            Current memoryTape: (${memoryTape})
            Current data: (${currentData})`
          );
          setNewInputChar();
        }
        console.log("END TEST 1------------------------------------");
      }
      function test2() {
        console.log("");
        console.log("--- INPUT CHAR AS ASCII CODE: TEST 2 ---");
        memoryTape = [0,0,0,0,0,0,0,0,0,0];
        dataPointer = 0;
        inputPointer = 0;
        inputString = "Debaucle";
        characterArray = ["D","e","b","a","u","c","l","e"];
        loopCount = 0;
        for (let i=0; i<=characterArray.length-1; i++) {
          loopCount++;
          console.log("");
          console.log(`--------------------LOOP COUNT: ${loopCount}`);
          setCurrentInputChar();            console.log(`STARTING VALUES:
            Input String: (${inputString})
            Current Input Character: (${currentInputChar})
            Current Input Code: (${currentInputChar.charCodeAt()})
            Current memoryTape: (${memoryTape})
            Current data: (${currentData})`
          );
          inputCharAsAsciiCode();
          setNewCurrentData();
          console.log(`RESULT VALUES: 
            Current Input Character: (${currentInputChar})
            Current Input Code: (${currentInputChar.charCodeAt()})
            Current memoryTape: (${memoryTape})
            Current data: (${currentData})`
          );
          setNewInputChar();
        }
        console.log("END TEST 2------------------------------------");
      }
      function test3() {
        console.log("");
        console.log("--- INPUT CHAR AS ASCII CODE: TEST 3 ---");
        memoryTape = [0,0,0,0,0,0,0,0];
        dataPointer = 0;
        inputPointer = 0;
        inputString = "Exhaustion";
        characterArray = ["E","x","h","a","u","s","t","i","o","n"];
        loopCount = 0;
        for (let i=0; i<=characterArray.length-1; i++) {
          loopCount++;
          console.log("");
          console.log(`--------------------LOOP COUNT: ${loopCount}`);
          setCurrentInputChar();            console.log(`STARTING VALUES:
            Input String: (${inputString})
            Current Input Character: (${currentInputChar})
            Current Input Code: (${currentInputChar.charCodeAt()})
            Current memoryTape: (${memoryTape})
            Current data: (${currentData})`
          );
          inputCharAsAsciiCode();
          setNewCurrentData();
          console.log(`RESULT VALUES: 
            Current Input Character: (${currentInputChar})
            Current Input Code: (${currentInputChar.charCodeAt()})
            Current memoryTape: (${memoryTape})
            Current data: (${currentData})`
          );
          setNewInputChar();
        }
        console.log("END TEST 3------------------------------------");
      }
      test1();
      test2();
      test3();
  }
  //uncomment to run INPUT CHAR AS ASCII CODE unit tests
  //inputCharAsAsciiCodeTests();

  function outputAsciiCodeAsChar() {
      setCurrentData();
      if (currentData < 32) {
        console.log(`Error, no character code detected. memTable[dataPointer] (${memoryTape[dataPointer]}) is null or 0-31.`);
      } else {
      outputString = outputString.concat(String.fromCharCode(memoryTape[dataPointer]));
      }
  };
  function OutputAsciiCodeAsCharTests() {
      function test1() {
        console.log("");
        console.log("--- ASCII CODE TO OUTPUT STRING: TEST 1 ---");
          memoryTape = [0, 100, 255, 300];
          dataPointer = 0;
          setCurrentData();
          setCurrentInputChar();
          console.log(`STARTING VALUES: 
            Current Data: (${currentData}) 
            Current memory tape: (${memoryTape}) 
            Input Character: (${String.fromCharCode(currentData)}) 
            Input character code: (${characterArray[inputPointer].charCodeAt(0)})
            Current output string: (${outputString})`);
          outputAsciiCodeAsChar();
          setCurrentInputChar();
          console.log(`RESULT VALUES: 
            Current Data: (${currentData}) 
            Current memory tape: (${memoryTape}) 
            Input Character: (${String.fromCharCode(currentData)}) 
            Input character code: (${characterArray[inputPointer].charCodeAt(0)}) 
            Current output string: (${outputString})`);
          console.log("------------------------------------");
      }

      function test2() {
        console.log("");
        console.log("--- ASCII CODE TO OUTPUT STRING: TEST 2 ---");
        memoryTape = [0, 100, 255, 300];
        dataPointer = 1;
        setCurrentData();
        setCurrentInputChar();
        console.log(`STARTING VALUES: 
          Current Data: (${currentData}) 
          Current memory tape: (${memoryTape}) 
          Input Character: (${String.fromCharCode(currentData)}) 
          Input character code: (${characterArray[inputPointer].charCodeAt(0)})
          Current output string: (${outputString})`);
        outputAsciiCodeAsChar();
        setCurrentInputChar();
        console.log(`RESULT VALUES: 
          Current Data: (${currentData}) 
          Current memory tape: (${memoryTape}) 
          Input Character: (${String.fromCharCode(currentData)}) 
          Input character code: (${characterArray[inputPointer].charCodeAt(0)}) 
          Current output string: (${outputString})`);
        console.log("------------------------------------");
      }

      function test3() {
        console.log("");
        console.log("--- ASCII CODE TO OUTPUT STRING: TEST 3 ---");
        memoryTape = [0, 100, 255, 300];
        dataPointer = 2;
        setCurrentData();
        setCurrentInputChar();
        console.log(`STARTING VALUES: 
          Current Data: (${currentData}) 
          Current memory tape: (${memoryTape}) 
          Input Character: (${String.fromCharCode(currentData)}) 
          Input character code: (${characterArray[inputPointer].charCodeAt(0)})
          Current output string: (${outputString})`);
        outputAsciiCodeAsChar();
        setCurrentInputChar();
        console.log(`RESULT VALUES: 
          Current Data: (${currentData}) 
          Current memory tape: (${memoryTape}) 
          Input Character: (${String.fromCharCode(currentData)}) 
          Input character code: (${characterArray[inputPointer].charCodeAt(0)}) 
          Current output string: (${outputString})`);
        console.log("------------------------------------");
      }

      function test4() {
      console.log("");
      console.log("--- ASCII CODE TO OUTPUT STRING: TEST 4 ---");
        memoryTape = [0, 100, 255, 300];
        dataPointer = 3;
        setCurrentData();
        setCurrentInputChar();
        console.log(`STARTING VALUES: 
          Current Data: (${currentData}) 
          Current memory tape: (${memoryTape}) 
          Input Character: (${String.fromCharCode(currentData)}) 
          Input character code: (${characterArray[inputPointer].charCodeAt(0)}) 
          Current output string: (${outputString})`);
        outputAsciiCodeAsChar();
        setCurrentInputChar();
        console.log(`RESULT VALUES: 
          Current Data: (${currentData}) 
          Current memory tape: (${memoryTape}) 
          Input Character: (${String.fromCharCode(currentData)}) 
          Input character code: (${characterArray[inputPointer].charCodeAt(0)}) 
          Current output string: (${outputString})`);
        console.log("------------------------------------");
      }
      //comment or uncomment code lines below to run specific tests
      test1();
      test2();
      test3();
      test4();
  };
  //uncomment code below to run OUTPUT ASCII CODE TO CHARACTER unit tests
  //OutputAsciiCodeAsCharTests();
    
  function incrementCurrentData() {
      if (currentData <= 254) {
        memoryTape[dataPointer] = currentData + 1;
      } else if (currentData >= 255) {
        memoryTape[dataPointer] = 0;
      }
      setCurrentData();
  };
  function incrementCurrentDataTests() {
      function test1() {
        console.log("--- 'INCREMENT CURRENT DATA' TEST 1----------------------------------------- ")
        currentData = 0;
        memoryTape = [0, 100, 255, 300];
        dataPointer = 0;
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        incrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        console.log("")
      }
      function test2() {
        console.log("--- 'INCREMENT CURRENT DATA' TEST 2----------------------------------------- ")
        currentData = 300;
        emoryTape = [0, 100, 255, 300];
        dataPointer = 3;
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        incrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        console.log("")
      }
      function test3() {
        console.log("--- 'INCREMENT CURRENT DATA' TEST 3----------------------------------------- ")
        currentData = 100;
        memoryTape = [0, 100, 255, 300];
        dataPointer = 1;
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        incrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        console.log("")
      }
      function test4() {
        console.log("--- 'INCREMENT CURRENT DATA' TEST 4----------------------------------------- ")
        currentData = 255;
        memoryTape = [0, 100, 255, 300];
        dataPointer = 2;
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        incrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
      }
      test1();
      test2();
      test3();
      test4();
  }
  //uncomment to run INCREMENT CURRENT DATA unit tests
  //incrementCurrentDataTests();

  function decrementCurrentData() {
      if (currentData >= 1) {
        if (currentData >=255) {
          memoryTape[dataPointer] = 254;
          setCurrentData();
        } else {
          currentData--;
          setCurrentByte();
        } 
      } else if (currentData <= 0 ) {
        memoryTape[dataPointer] = 255;
        setCurrentData();
      }
  };
  function decrementCurrentDataTests() {
      function test1() {
        console.log("---DECREMENT CURRENT DATA TEST 1----------------------------------------- ")
        memoryTape = [0, 100, 1, 300];
        dataPointer = 0;
        currentData = memoryTape[dataPointer];
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        decrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
      }
      function test2() {
        console.log("---DECREMENT CURRENT DATA TEST 2----------------------------------------- ")
        memoryTape = [0, 100, 1, 300];
        dataPointer = 1;
        currentData = memoryTape[dataPointer];
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        decrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)        
      }
      function test3() {
        console.log("---DECREMENT CURRENT DATA TEST 3----------------------------------------- ")
        memoryTape = [0, 100, 1, 300];
        dataPointer = 2;
        currentData = memoryTape[dataPointer];
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        decrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
      }
      function test4() {
        console.log("---DECREMENT CURRENT DATA TEST 4----------------------------------------- ")
        memoryTape = [0, 100, 1, 300];
        dataPointer = 3;
        currentData = memoryTape[dataPointer];
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        decrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
      }

      //comment or uncomment to run specific tests
      test1();
      test2();
      test3();
      test4();
  }
  //uncomment to run DECREMENT CURRENT DATA unit tests
  //decrementCurrentDataTests();

  function jumpInstructionPointerForward() {
    setNewCurrentInstruction();
    for (; instructionPointer <= instructionArray.length; instructionPointer++) {
      switch (currentInstruction) {
        case '[':
          openBrackets++;
          setNewCurrentInstruction();
          break;
          case ']':
            if (openBrackets == 0) {
              setNewCurrentInstruction();
              break;
            } else {
              openBrackets--;
              setNewCurrentInstruction();
            }
        break;
        default:
          setNewCurrentInstruction();
      }
    }       
  };
  //jumpInstructionPointerForward();

  function jumpInstructionPointerForwardTests() {
    instructionArray = Array.from("[+,]<.[.]]>");
    setCurrentInstruction();
    console.log(`Open Brackets: ${openBrackets}
      Current Instruction Array: ${instructionArray}
      Current Instruction: ${currentInstruction}
      Current Index (instructionPointer): ${instructionPointer}`
    );
    jumpInstructionPointerForward();
    console.log(`Open Brackets: ${openBrackets}
      Current Instruction Array: ${instructionArray}
      Current Instruction: ${currentInstruction}
      Current Index (Should be 9, closing bracket's index in test instruction array): ${instructionPointer}`
    );
  }
  //uncomment to run JUMP INSTRUCTION POINTER FORWARD unit tests
  jumpInstructionPointerForwardTests();

  

  function jumpInstructionPointerBack() {
    var closedBrackets = 0;
    function setNewInstruction() {
      instructionPointer--;
      currentInstruction = instructionArray[instructionPointer];
    }                 
    if (memoryTape[dataPointer] !== 0) {
      setNewInstruction();
      if (currentInstruction === "]") {
        closedBrackets++;
        setNewInstruction();
      } else if (currentInstruction === "[") {
        if (closedBrackets === 0) {
          instructionPointer++;
          currentInstruction = instructionArray[instructionPointer];
        } else {
          closedBrackets--;
          setNewInstruction();
        };
      } else {
        setNewInstruction();
      }
    };
  };
                                  
                                  
                                  
  function mainLoop() {
  // for (; instructionPointer <= instructionArray.length; instructionPointer++) {
  //   currentInstruction = instructionArray[instructionPointer];
  //   // console.log(currentInstruction)
  //   // console.log("main for loop reached")
  //   switch (currentInstruction) {
  //     case '>':
  //       //console.log(`INCREMENT dataPointer to ${dataPointer + 1}.`);
  //       dataPointer++;
  //       break;
  //     case '<':
  //       //console.log(`DECREMENT dataPointer to ${dataPointer - 1}.`);
  //       dataPointer--;
  //       break;
  //     case '+':
  //       //console.log(`INCREMENT byte (${memoryTape[dataPointer]}) IN memoryTape AT dataPointer to ${memoryTape[dataPointer + 1]}.`);
  //       incrementMemoryTapeByte();
  //       //console.log(memoryTape[dataPointer]);
  //       break;
  //     case '-':
  //       //console.log(`DECREMENT byte (${memoryTape[dataPointer]}) IN memoryTape AT dataPointer to ${memoryTape[dataPointer - 1]}.`);
  //       decrementMemoryTapeByte();
  //       //console.log(memoryTape[dataPointer]);
  //       break;
  //     case '.':
  //       //console.log(`OUTPUT byte IN memoryTape AT data pointer (${memoryTape[dataPointer]}) TO outputString AS character (${String.fromCharCode(memoryTape[dataPointer])}).`);
  //       outputMemoryTapeByte();
  //       //console.log(outputString);
  //       break;
  //     case ',':
  //       //console.log(`INPUT byte IN characterArray AT inputPointer (${characterArray[inputPointer]}) TO memoryTape cell AT dataPointer (${memoryTape[dataPointer]})AS ascii code (${characterArray[inputPointer].charCodeAt(0)}).`);
  //       inputCharacterArrayByte();
  //       break;
  //     case '[':
  //       //console.log('IF dataPointer IS AT zero, MOVE instruction pointer TO next command AFTER matched bracket set.');
  //       jumpInstructionPointerForward();
  //       break;
  //     case ']':
  //       //console.log('IF dataPointer IS AT nonzero, MOVE instruction pointer TO first command IN matched bracket set.');
  //       jumpInstructionPointerBack();
  //       break;
  //   }
  //   }
  }
}
//uncomment to test main program
brainLuck("", "");
  
//uncomment to run main program
//brainLuck(',+[-.,+]','Codewars')