import { useRef, useState } from 'react';
import { Check, Eye, EyeOff, X } from 'lucide-react';
import './App.css'

function App() {
  //password
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [isContainsLowerCase, setLowerCase] = useState(false);
  const [isContainsUpperCase, setUpperCase] = useState(false);
  const [isContainsNumber, setNumber] = useState(false);
  const [isContainsMinimumLength, setContainsMinimumLength] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setLowerCase(containsLowerCase(event.target.value));
    setUpperCase(containsUpperCase(event.target.value));
    setNumber(containsNumber(event.target.value));
    setContainsMinimumLength(containsMinimumLength(event.target.value));
  };

  //code
  const [codeVerified, setCodeVerified] = useState(false);
  const [code, setCode] = useState("");
  const inputOne = useRef<HTMLInputElement>(null);
  const inputTwo = useRef<HTMLInputElement>(null);
  const inputThree = useRef<HTMLInputElement>(null);
  const inputFour = useRef<HTMLInputElement>(null);
  const inputFive = useRef<HTMLInputElement>(null);
  const inputSix = useRef<HTMLInputElement>(null);
  const event = new KeyboardEvent("keydown", { key: "Backspace" });
  const handleInputChanges = (
    currentInput: React.RefObject<HTMLInputElement | null>,
    nextInput: React.RefObject<HTMLInputElement | null>,
    prevInput: React.RefObject<HTMLInputElement | null>
  ) => {
    if (currentInput.current && currentInput.current.value.length === 1) {
      nextInput.current?.focus();
    } else if (currentInput.current && event.key === "Backspace") {
      prevInput.current?.focus();
    }
    setCode(`${inputOne.current?.value}${inputTwo.current?.value}${inputThree.current?.value}${inputFour.current?.value}${inputFive.current?.value}${inputSix.current?.value}`);
    setCodeVerified(isCodeVerified(`${inputOne.current?.value}${inputTwo.current?.value}${inputThree.current?.value}${inputFour.current?.value}${inputFive.current?.value}${inputSix.current?.value}`));
  };

  //Delete all inputs
  const deleteCode = () => {
    setCodeVerified(false);
    setCode("");
    inputOne.current?.focus();
    inputOne.current!.value = "";
    inputTwo.current!.value = "";
    inputThree.current!.value = "";
    inputFour.current!.value = "";
    inputFive.current!.value = "";
    inputSix.current!.value = "";
  };

  const deletePassword = () => {
    setInputValue("");
    setLowerCase(false);
    setUpperCase(false);
    setNumber(false);
    setContainsMinimumLength(false);
  };

  const cancel = () => {
    deleteCode();
    deletePassword();
  };

  //Clear code with BackCtrl + Backspace
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey && event.key === "Backspace") {
      deleteCode();
    }
  };

  //allow only numbers
  const handleInput = (currentInput: React.RefObject<HTMLInputElement | null>) => {
    if (currentInput.current) {
      currentInput.current.value = currentInput.current.value.replace(/[^0-9]/g, "");
    }
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen bg-[#fafafa]"
      >
        <div 
          className="flex flex-col items-center justify-center w-[21%] max-lg:w-2/3 h-fit gap-y-2"
        >
          <div className="w-full flex flex-col items-start">
            <h1 className="font-bold text-xl">Reset Password</h1>
            <p className="text-sm text-[#95969d]">Enter the code send to <span className="text-black">info@pixellz.io</span> to reset your password</p>
          </div>
          <div className="w-full flex flex-row justify-start items-center gap-x-2">
            <input 
              type="text"
              inputMode="numeric" 
              maxLength={1} 
              ref={inputOne}
              onInput={() => handleInput(inputOne)}
              onChange={() => handleInputChanges(inputOne, inputTwo, inputOne)}
              className="bg-white border-1 border-[#e8e8e8] rounded-xl shadow-2xs w-[2.2rem] h-[2.2rem] outline-none items-center justify-center text-center font-[Geist]" 
            />
            <input 
              type="text" 
              maxLength={1} 
              ref={inputTwo}
              onInput={() => handleInput(inputTwo)}
              onKeyDown={handleKeyDown}
              onChange={() => handleInputChanges(inputTwo, inputThree, inputOne)}
              className="bg-white border-1 border-[#e8e8e8] rounded-xl shadow-2xs w-[2.2rem] h-[2.2rem] outline-none items-center justify-center text-center font-[Geist]" 
            />
            <input 
              type="text" 
              inputMode="numeric"
              maxLength={1} 
              ref={inputThree}
              onInput={() => handleInput(inputThree)}
              onKeyDown={handleKeyDown}
              onChange={() => handleInputChanges(inputThree, inputFour, inputTwo)}
              className="bg-white border-1 border-[#e8e8e8] rounded-xl shadow-2xs w-[2.2rem] h-[2.2rem] outline-none items-center justify-center text-center font-[Geist]" 
            />
            •
            <input 
              type="text" 
              inputMode="numeric"
              maxLength={1} 
              ref={inputFour}
              onInput={() => handleInput(inputFour)}
              onKeyDown={handleKeyDown}
              onChange={() => handleInputChanges(inputFour, inputFive, inputThree)}
              className="bg-white border-1 border-[#e8e8e8] rounded-xl shadow-2xs w-[2.2rem] h-[2.2rem] outline-none items-center justify-center text-center font-[Geist]" 
            />
            <input 
              type="text" 
              inputMode="numeric"
              maxLength={1} 
              ref={inputFive}
              onInput={() => handleInput(inputFive)}
              onKeyDown={handleKeyDown}
              onChange={() => handleInputChanges(inputFive, inputSix, inputFour)}
              className="bg-white border-1 border-[#e8e8e8] rounded-xl shadow-2xs w-[2.2rem] h-[2.2rem] outline-none items-center justify-center text-center font-[Geist]" 
            />
            <input 
              type="text" 
              inputMode="numeric"
              maxLength={1} 
              ref={inputSix}
              onInput={() => handleInput(inputSix)}
              onKeyDown={handleKeyDown}
              onChange={() => handleInputChanges(inputSix, inputSix, inputFive)}
              className="bg-white border-1 border-[#e8e8e8] rounded-xl shadow-2xs w-[2.2rem] h-[2.2rem] outline-none items-center justify-center text-center font-[Geist]" 
            />
          </div>
          <div className={codeVerified ? "w-full flex flex-row justify-start items-center gap-x-2 text-[#25ad6b]" : "w-full flex flex-row justify-start items-center gap-x-2 text-[#95969d]"}>
            {codeVerified ? <Check className="w-[1rem]" /> : <X className="w-[1rem]" />}
            <span className="text-sm">Code verified</span>
          </div>
          <hr className="border-[#95969d] w-full h-[0.5px] mt-2 mb-2" />
          <div className="w-full flex-col items-start space-y-2 ">
            <p className="font-[600] text-sm">New Password</p>
            <div className="w-full flex justify-between items-center text-[#95969d] bg-white border-1 border-[#e8e8e8] rounded-xl shadow-2xs py-1.5 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M7 18q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.138T12.65 10H21q.825 0 1.413.588T23 12q0 .9-.625 1.45T21 14v2q0 .825-.587 1.413T19 18t-1.412-.587T17 16v-2h-4.35q-.6 1.725-2.113 2.863T7 18m0-4q.825 0 1.413-.587T9 12t-.587-1.412T7 10t-1.412.588T5 12t.588 1.413T7 14"/></svg>
              <input 
                value={inputValue} 
                type={showPassword ? "text" : "password"} 
                className="bg-transparent outline-none w-3/4"
                onChange={handleChange} />
              <button onClick={() => setShowPassword(!showPassword)} className="flex w-fit h-fit justify-center items-center outline-none cursor-pointer bg-transparent">
                {showPassword ? <EyeOff /> : <Eye/>}
              </button>
            </div>
            <div className="w-full flex flex-col items-start">
              <div className={isContainsLowerCase ? "w-full flex flex-row justify-start items-center gap-x-2 text-[#25ad6b]" : "w-full flex flex-row justify-start items-center gap-x-2 text-[#95969d]"}>
                {isContainsLowerCase ? <Check className="w-[1rem]" /> : <X className="w-[1rem]" />}
                <span className="text-sm">At least one lowercase letter</span>
              </div>
              <div className={isContainsMinimumLength ? "w-full flex flex-row justify-start items-center gap-x-2 text-[#25ad6b]" : "w-full flex flex-row justify-start items-center gap-x-2 text-[#95969d]"}>
                {isContainsMinimumLength ? <Check className="w-[1rem]" /> : <X className="w-[1rem]" />}
                <span className="text-sm">Minimum 8 characters</span>
              </div>
              <div className={isContainsUpperCase ? "w-full flex flex-row justify-start items-center gap-x-2 text-[#25ad6b]" : "w-full flex flex-row justify-start items-center gap-x-2 text-[#95969d]"}>
                {isContainsUpperCase ? <Check className="w-[1rem]" /> : <X className="w-[1rem]" />}
                <span className="text-sm">At least one uppercase letter</span>
              </div>
              <div className={isContainsNumber ? "w-full flex flex-row justify-start items-center gap-x-2 text-[#25ad6b]" : "w-full flex flex-row justify-start items-center gap-x-2 text-[#95969d]"}>
                {isContainsNumber ? <Check className="w-[1rem]" /> : <X className="w-[1rem]" />}
                <span className="text-sm">At least one number</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <input 
              type="reset" 
              value="Cancel" 
              className="cursor-pointer bg-white border-1 border-[#e8e8e8] rounded-xl shadow-2xs w-fit h-fit outline-none items-center justify-center text-center font-[Geist] py-2 px-3 text-sm font-[600]"
              onClick={cancel} />
            <input type="reset" value="Reset Password" className="cursor-pointer bg-[#a7a8b0] border-1 border-[#a7a8b0] rounded-xl shadow-2xs w-fit h-fit outline-none items-center justify-center text-center font-[Geist] py-2 px-3 text-sm font-[600] text-white" />
          </div>
        </div>
      </div>
    </>
  )
}

// Helper password functions
function containsNumber(str: string) {
  const regex = /\d/;
  return regex.test(str);
}

function containsUpperCase(str: string) {
  const regex = /[A-Z]/;
  return regex.test(str);
}

function containsLowerCase(str: string) {
  const regex = /[a-z]/;
  return regex.test(str);
}

function containsMinimumLength(str: string) {
  return str.length >= 8;
}

// Helper code functions
function isCodeVerified(str: string) {
  return str.length === 6;
}

export default App;

