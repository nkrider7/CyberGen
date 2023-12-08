import React, { useState, useEffect, useCallback } from "react";
import * as my from "../PasswordGenrator/method";
import rulesString from "../PasswordGenrator/rulesString";
import applyRule from "../PasswordGenrator/applyRules";
import specialList from "../PasswordGenrator/special";
import bg from "../assets/bg.png";
export default function Mainbody() {
  const [tags, setTags] = useState([]);
  const [resultBox, setResultBox] = useState('');
  const [special, setSpecial] = useState(false);
  const [passLength, setPassLength] = useState(8);

  
  console.log(specialList)

  const generate = useCallback(() => {
    const data = tags.join(' ').split(/[\s,]+/).filter((v, i, a) => a.indexOf(v) === i).filter(Boolean);
    const rules = rulesString.split("\n");
    const list = new Set();

    for (const string of data) {
      for (const rule of rules) {
        const ruleResult = applyRule(string, rule);
        if (ruleResult !== false) {
          list.add(ruleResult);
        }
        if (special) {
          list.add(specialList);
        }
      }
    }

    return list;
  }, [tags, special]);

  useEffect(() => {
    setResultBox([...generate()].join("\n"));
  }, [generate]);

  const clearTags = () => {
    setTags([]);
    if(e.target.text === 'Clear'){
      e.target.text = 'Cleared!';
      setTimeout(() => {
        e.target.text = 'Clear';
      }, 2000);
     }
  }

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value.trim();
    if (!value) return;
    if (tags.length === 10) alert("Overload tags");
    else setTags([...tags, value]);
    e.target.value = null;
  };

  const handleCheckboxChange = (setState) => () => setState((prev) => !prev);

  const resultScore = generate().size;

  return (
    <>
      <div className="dark:bg-myblack dark:text-greenlite">
        <div className="container h-auto mx-auto px-4">
        <div className="flex flex-col items-center justify-top pt-8 h-[110vh]">
            
        <img src={bg} alt="Cybergen" className="h-40" />
            
            <p className=" text-mywhite text-xl mt-6">
              The Best Place to Generate Password List and Download.
            </p>
            <div className=" mt-4 my-1  w-full overflow-x-clip">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-teal-600 text-red h-2  px-2 py-1 border border-greenlite rounded-lg mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          <input
            onKeyDown={handleKeyDown}
            id="OrderNotes"
              className="mt-2 w-full p-3 bg-myblack border border-greenlite rounded-lg border-gray-200 align-top shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
              rows="1"
              placeholder="Enter some tags to Related to Victim, ( 'admin', 'Rahul', '2004' )"
              spellCheck="false"
              type="text"
          />
          <div className="pt-4 gap-4">
            <input
              type="range"
              className="accent-greenlite mx-4"
              min={4}
              max={12}
              value={passLength}
              onChange={(e) => setPassLength(e.target.value)}
            />
            <label>Password Length {passLength}</label>
          </div>
          <div className="pt-4 gap-4">
            <input
              className="accent-greenlite mx-2"
              type="checkbox"
              defaultChecked={special}
              onChange={handleCheckboxChange(setSpecial)}
              id="addSpecial"
            />
            <label htmlFor="addSpecial" className="text-sm">Add Special</label>
            {/* ... */}
          </div>
          <div className="pt-4 gap-4">
           {/* <a onClick={() => setResultBox([...generate()].join("\n"))} className="rounded-md mr-4 mt-4 border-2 border-teal-600 cursor-pointer focus:bg-greenlite hover:bg-greenlite hover:text-myblack bg-gray-100 px-4 py-1 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">Generator</a>*/}
            <a className="rounded-md mt-4 border-2 border-teal-600 cursor-pointer focus:bg-greenlite hover:bg-greenlite hover:text-myblack bg-gray-100 px-4 py-1 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            onClick={() => clearTags()}
            >Clear</a>
          </div>
          <p className="mt-3">Result : {resultScore}</p>
          <textarea
            className="mt-2 w-full p-3 bg-myblack border border-greenlite rounded-lg ... "
            rows="3"
            value={resultBox}
          ></textarea>
          <a onClick={() => navigator.clipboard.writeText(resultBox)} className="rounded-md mt-4 border-2 cursor-pointer border-teal-600 my-10 hover:bg-greenlite hover:text-myblack bg-gray-100 px-4 py-1 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 ">Copy</a>
          {/* ... */}
        </div>
      </div>
      </div>
    </>
  );
}
