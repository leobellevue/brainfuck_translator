function brainLuck(instructionString, inputString) {
  var memoryTape = new Array(10000).fill(0);
  var instructionArray = Array.from(instructionString);
  var characterArray = Array.from(inputString);
  var outputString = "";
  var dataCursor = 0;
  var instructionCursor = 0;
  var inputCursor = 0;
  var currentData = memoryTape[dataCursor];
  var currentInstruction = instructionArray[instructionCursor];
  var currentInputChar = characterArray[inputCursor];
  var currentInputCode = currentInputChar;
  var openBrackets = 0;

  function setCurrentInstruction() {
    currentInstruction = instructionArray[instructionCursor];
  }
  function setCurrentInstructionTests() {
    console.log("SET CURRENT INSTRUCTION TESTS -----------")
    function test1() {
      console.log("SET CURRENT INSTRUCTION TEST 1 --------")
      instructionArray = ["<"];
      instructionCursor = 0;
      console.log(`Starting Instruction Cursor Index is ${instructionCursor}, Current Instruction is ${currentInstruction}`)
      setCurrentInstruction();
      console.log(`Starting Instruction Cursor Index is ${instructionCursor}, Current Instruction is ${currentInstruction}`)
    }
    test1();
  }
  //uncomment to run SET CURRENT INSTRUCTION unit test
  //PASS
  //setCurrentInstructionTest();

  function setNewCurrentInstruction() {
    instructionCursor++;
    setCurrentInstruction();
  }
  function setNewCurrentInstructionTest() {
    function test1() {
      instructionArray = ["<","-"];
      instructionCursor = 0;
      console.log(`Starting Instruction Cursor Index is ${instructionCursor}, Current Instruction is ${currentInstruction}`);
      setNewCurrentInstruction();
      console.log(`New Instruction Cursor Index is ${instructionCursor}, New Instruction is ${currentInstruction}`);

    }
    test1();
  }
  //uncomment to run SET NEW CURRENT INSTRUCTION unit test
  //PASS
  //setNewCurrentInstructionTest();

  function setCurrentInputChar() {
    currentInputChar = characterArray[inputCursor];
  }
  function setCurrentInputCharTests() {
    function test1() {
      characterArray = ["A"];
      inputCursor = 0;
      console.log(`Starting Input Character is ${currentInputChar}`)
      setCurrentInputChar();
      console.log(`Ending Input Char is ${currentInputChar}`)
    }
    test1();
  }
  //uncomment to run SET CURRENT INPUT CHARACTER unit tests
  setCurrentInputCharTests();

  function setNewCurrentInputChar() {
    console.log("setNewCurrentInputChar()");
      setCurrentInputChar();
  }
  function setNewInputCharTests() {
    function test1() {
      console.log("")
      console.log(`SET NEW CURRENT INPUT CHARACTER TEST 1 -----------`);
      characterArray = ["A","n","y"];
      inputCursor =0;
      currentInputChar = "A";
      for (let i=0; i <= characterArray.length-1; i++) {
        console.log("");
        console.log(`LOOP: ${i} --------------------`)
        console.log(`STARTING VALUES:
                      Current Input Character: ${currentInputChar}
                      Current inputCursor: ${inputCursor}`
        );
        setNewCurrentInputChar();
        console.log(`RESULT VALUES:
                      Current Input Character: ${currentInputChar}
                      Current inputCursor: ${inputCursor}`
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

  function setCurrentData() {
      currentData = memoryTape[dataCursor];
  }
  function setCurrentDataTests() {
    function test1() {
      memoryTape = [34];
      dataCursor = 0;
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
      dataCursor = 0;
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
      setCurrentData();
  }
  function setNewCurrentDataTests() {
    function test1() {
      memoryTape = [1,2];
      dataCursor = 0;
      currentData = 1;
      console.log(`Current Data: ${currentData}`);
      setNewCurrentData();
      console.log(`Current Data: ${currentData}`)
    }
    test1();
  }
  //uncomment to run SET NEW CURRENT DATA unit tests
  //setNewCurrentDataTests();

  function setCurrentInputCode() {
      currentInputCode = characterArray.charCodeAt(inputCursor);
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
      memoryTape[dataCursor] = currentInputChar.charCodeAt();
  }
  function inputCharAsAsciiCodeTests() {
      function test1() {
        console.log("");
        console.log("--- INPUT CHAR AS ASCII CODE: TEST 1 ---");
        memoryTape = [0,0,0,0,0,0,0,0];
        dataCursor = 0;
        inputCursor = 0;
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
        dataCursor = 0;
        inputCursor = 0;
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
        dataCursor = 0;
        inputCursor = 0;
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
        console.log(`Error, no character code detected. memTable[dataCursor] (${memoryTape[dataCursor]}) is null or 0-31.`);
      } else {
      outputString = outputString.concat(String.fromCharCode(memoryTape[dataCursor]));
      }
  };
  function OutputAsciiCodeAsCharTests() {
      function test1() {
        console.log("");
        console.log("--- ASCII CODE TO OUTPUT STRING: TEST 1 ---");
          memoryTape = [0, 100, 255, 300];
          dataCursor = 0;
          setCurrentData();
          setCurrentInputChar();
          console.log(`STARTING VALUES:
            Current Data: (${currentData})
            Current memory tape: (${memoryTape})
            Input Character: (${String.fromCharCode(currentData)})
            Input character code: (${characterArray[inputCursor].charCodeAt(0)})
            Current output string: (${outputString})`);
          outputAsciiCodeAsChar();
          setCurrentInputChar();
          console.log(`RESULT VALUES:
            Current Data: (${currentData})
            Current memory tape: (${memoryTape})
            Input Character: (${String.fromCharCode(currentData)})
            Input character code: (${characterArray[inputCursor].charCodeAt(0)})
            Current output string: (${outputString})`);
          console.log("------------------------------------");
      }

      function test2() {
        console.log("");
        console.log("--- ASCII CODE TO OUTPUT STRING: TEST 2 ---");
        memoryTape = [0, 100, 255, 300];
        dataCursor = 1;
        setCurrentData();
        setCurrentInputChar();
        console.log(`STARTING VALUES:
          Current Data: (${currentData})
          Current memory tape: (${memoryTape})
          Input Character: (${String.fromCharCode(currentData)})
          Input character code: (${characterArray[inputCursor].charCodeAt(0)})
          Current output string: (${outputString})`);
        outputAsciiCodeAsChar();
        setCurrentInputChar();
        console.log(`RESULT VALUES:
          Current Data: (${currentData})
          Current memory tape: (${memoryTape})
          Input Character: (${String.fromCharCode(currentData)})
          Input character code: (${characterArray[inputCursor].charCodeAt(0)})
          Current output string: (${outputString})`);
        console.log("------------------------------------");
      }

      function test3() {
        console.log("");
        console.log("--- ASCII CODE TO OUTPUT STRING: TEST 3 ---");
        memoryTape = [0, 100, 255, 300];
        dataCursor = 2;
        setCurrentData();
        setCurrentInputChar();
        console.log(`STARTING VALUES:
          Current Data: (${currentData})
          Current memory tape: (${memoryTape})
          Input Character: (${String.fromCharCode(currentData)})
          Input character code: (${characterArray[inputCursor].charCodeAt(0)})
          Current output string: (${outputString})`);
        outputAsciiCodeAsChar();
        setCurrentInputChar();
        console.log(`RESULT VALUES:
          Current Data: (${currentData})
          Current memory tape: (${memoryTape})
          Input Character: (${String.fromCharCode(currentData)})
          Input character code: (${characterArray[inputCursor].charCodeAt(0)})
          Current output string: (${outputString})`);
        console.log("------------------------------------");
      }

      function test4() {
      console.log("");
      console.log("--- ASCII CODE TO OUTPUT STRING: TEST 4 ---");
        memoryTape = [0, 100, 255, 300];
        dataCursor = 3;
        setCurrentData();
        setCurrentInputChar();
        console.log(`STARTING VALUES:
          Current Data: (${currentData})
          Current memory tape: (${memoryTape})
          Input Character: (${String.fromCharCode(currentData)})
          Input character code: (${characterArray[inputCursor].charCodeAt(0)})
          Current output string: (${outputString})`);
        outputAsciiCodeAsChar();
        setCurrentInputChar();
        console.log(`RESULT VALUES:
          Current Data: (${currentData})
          Current memory tape: (${memoryTape})
          Input Character: (${String.fromCharCode(currentData)})
          Input character code: (${characterArray[inputCursor].charCodeAt(0)})
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
        memoryTape[dataCursor] = currentData + 1;
      } else if (currentData >= 255) {
        memoryTape[dataCursor] = 0;
      }
      setCurrentData();
  };
  function incrementCurrentDataTests() {
      function test1() {
        console.log("--- 'INCREMENT CURRENT DATA' TEST 1----------------------------------------- ")
        currentData = 0;
        memoryTape = [0, 100, 255, 300];
        dataCursor = 0;
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        incrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        console.log("")
      }
      function test2() {
        console.log("--- 'INCREMENT CURRENT DATA' TEST 2----------------------------------------- ")
        currentData = 300;
        emoryTape = [0, 100, 255, 300];
        dataCursor = 3;
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        incrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        console.log("")
      }
      function test3() {
        console.log("--- 'INCREMENT CURRENT DATA' TEST 3----------------------------------------- ")
        currentData = 100;
        memoryTape = [0, 100, 255, 300];
        dataCursor = 1;
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        incrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        console.log("")
      }
      function test4() {
        console.log("--- 'INCREMENT CURRENT DATA' TEST 4----------------------------------------- ")
        currentData = 255;
        memoryTape = [0, 100, 255, 300];
        dataCursor = 2;
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
          memoryTape[dataCursor] = 254;
          setCurrentData();
        } else {
          currentData--;
          setCurrentByte();
        }
      } else if (currentData <= 0 ) {
        memoryTape[dataCursor] = 255;
        setCurrentData();
      }
  };
  function decrementCurrentDataTests() {
      function test1() {
        console.log("---DECREMENT CURRENT DATA TEST 1----------------------------------------- ")
        memoryTape = [0, 100, 1, 300];
        dataCursor = 0;
        currentData = memoryTape[dataCursor];
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        decrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
      }
      function test2() {
        console.log("---DECREMENT CURRENT DATA TEST 2----------------------------------------- ")
        memoryTape = [0, 100, 1, 300];
        dataCursor = 1;
        currentData = memoryTape[dataCursor];
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        decrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
      }
      function test3() {
        console.log("---DECREMENT CURRENT DATA TEST 3----------------------------------------- ")
        memoryTape = [0, 100, 1, 300];
        dataCursor = 2;
        currentData = memoryTape[dataCursor];
        console.log(`STARTING VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
        decrementCurrentData();
        console.log(`RESULT VALUES: Current data: (${currentData}) Current memory tape: (${memoryTape})`)
      }
      function test4() {
        console.log("---DECREMENT CURRENT DATA TEST 4----------------------------------------- ")
        memoryTape = [0, 100, 1, 300];
        dataCursor = 3;
        currentData = memoryTape[dataCursor];
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

  function jumpInstructionCursorForward() {
    console.log(`
      Current Instruction Cursor Index: ${instructionCursor}
      Current Instruction: ${currentInstruction}`
    );
    for (; instructionCursor <= instructionArray.length; instructionCursor++)
      switch (currentInstruction) {
        case '[':
          setCurrentInstruction();
          openBrackets++;
          console.log(`Current Instruction Cursor Index: ${instructionCursor}
            Current Instruction: ${currentInstruction}
            Open Brackets: ${openBrackets}`
          );
          break;
        case ']':
          setCurrentInstruction();
          if (openBrackets === 0) {
            console.log(`Current Instruction Cursor Index: ${instructionCursor}
              Current Instruction: ${currentInstruction}
              Open Brackets: ${openBrackets}. Closing bracket found at ${instructionArray.indexOf(instructionArray[instructionCursor])}`
            );
            break;
          } else {
            setCurrentInstruction();
            openBrackets--;
            console.log(`Current Instruction Cursor Index: ${instructionCursor}
              Current Instruction: ${currentInstruction}
              Open Brackets: ${openBrackets}`
              );
            break;
          }
          default:
          setCurrentInstruction();
          console.log(`Current Instruction Cursor Index: ${instructionCursor}
            Current Instruction: ${currentInstruction}
            Nonbracket character. Setting new current instruction.`
          );
    };
  };


  //jumpInstructionCursorForward();

  function jumpInstructionCursorForwardTests() {
    instructionArray = Array.from("[+,]<.[.]]>");
    instructionCursor = -1;
    jumpInstructionCursorForward();
  }
  //uncomment to run JUMP INSTRUCTION CURSOR FORWARD unit tests
  //jumpInstructionCursorForwardTests();



  function jumpInstructionCursorBack() {
    var closedBrackets = 0;
    function setNewInstruction() {
      instructionCursor--;
      currentInstruction = instructionArray[instructionCursor];
    }
    if (memoryTape[dataCursor] !== 0) {
      setNewInstruction();
      if (currentInstruction === "]") {
        closedBrackets++;
        setNewInstruction();
      } else if (currentInstruction === "[") {
        if (closedBrackets === 0) {
          instructionCursor++;
          currentInstruction = instructionArray[instructionCursor];
        } else {
          closedBrackets--;
          setNewInstruction();
        };
      } else {
        setNewInstruction();
      }
    };
  };



  //function mainLoop() {
  // for (; instructionCursor <= instructionArray.length; instructionCursor++) {
  //   currentInstruction = instructionArray[instructionCursor];
  //   // console.log(currentInstruction)
  //   // console.log("main for loop reached")
  //   switch (currentInstruction) {
  //     case '>':
  //       //console.log(`INCREMENT dataCursor to ${dataCursor + 1}.`);
  //       dataCursor++;
  //       break;
  //     case '<':
  //       //console.log(`DECREMENT dataCursor to ${dataCursor - 1}.`);
  //       dataCursor--;
  //       break;
  //     case '+':
  //       //console.log(`INCREMENT byte (${memoryTape[dataCursor]}) IN memoryTape AT dataCursor to ${memoryTape[dataCursor + 1]}.`);
  //       incrementMemoryTapeByte();
  //       //console.log(memoryTape[dataCursor]);
  //       break;
  //     case '-':
  //       //console.log(`DECREMENT byte (${memoryTape[dataCursor]}) IN memoryTape AT dataCursor to ${memoryTape[dataCursor - 1]}.`);
  //       decrementMemoryTapeByte();
  //       //console.log(memoryTape[dataCursor]);
  //       break;
  //     case '.':
  //       //console.log(`OUTPUT byte IN memoryTape AT data Cursor (${memoryTape[dataCursor]}) TO outputString AS character (${String.fromCharCode(memoryTape[dataCursor])}).`);
  //       outputMemoryTapeByte();
  //       //console.log(outputString);
  //       break;
  //     case ',':
  //       //console.log(`INPUT byte IN characterArray AT inputCursor (${characterArray[inputCursor]}) TO memoryTape cell AT dataCursor (${memoryTape[dataCursor]})AS ascii code (${characterArray[inputCursor].charCodeAt(0)}).`);
  //       inputCharacterArrayByte();
  //       break;
  //     case '[':
  //       //console.log('IF dataCursor IS AT zero, MOVE instruction Cursor TO next command AFTER matched bracket set.');
  //       jumpInstructionCursorForward();
  //       break;
  //     case ']':
  //       //console.log('IF dataCursor IS AT nonzero, MOVE instruction Cursor TO first command IN matched bracket set.');
  //       jumpInstructionCursorBack();
  //       break;
  //   }
  //   }
  //}
  //}
}
//uncomment to test main program
brainLuck("", "");

//uncomment to run main program
//brainLuck(',+[-.,+]','Codewars')
