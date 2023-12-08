
export function convertN(chr) {
    if (chr >= "0" && chr <= "9") {
      return Number(chr);
    }
    return Number(chr.toUpperCase().charCodeAt(0) - 55);
  }
  
 export function Nothing(string) {
    return string;
  }
  
export function Lowercase(string) {
    return string.toLowerCase();
  }
  
export function Uppercase(string) {
    return string.toUpperCase();
  }
  
export function Capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
export function InvertCapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1).toUpperCase();
  }
  
export function TogglePosition(string, pos) {
    if (isNaN(parseInt(pos))) pos = convertN(pos);
    if (string.charAt(pos) === string.charAt(pos).toUpperCase()) {
      return (
        string.slice(0, pos) +
        string.charAt(pos).toLowerCase() +
        string.slice(pos + 1)
      );
    }
    if (string.charAt(pos) === string.charAt(pos).toLowerCase()) {
      return (
        string.slice(0, pos) +
        string.charAt(pos).toUpperCase() +
        string.slice(pos + 1)
      );
    }
  }
  
export function ToggleCase(string) {
    for (var i = 0; i < string.length; i++) {
      string = TogglePosition(string, i);
    }
    return string;
  }
  
export function Reverse(string) {
    return string.split("").reverse().join("");
  }
  
export function Duplicate(string) {
    return string + string;
  }
  
export function DuplicateN(string, n) {
    var tmp = "";
    n = convertN(n);
    for (var i = 0; i < n; i++) {
      tmp += string;
    }
    return tmp;
  }
  
export function Reflect(string) {
    return string + Reverse(string);
  }
  
export function RotateLeft(string) {
    return string.slice(1) + string.charAt(0);
  }
  
export function RotateRight(string) {
    return string.charAt(string.length - 1) + string.slice(0, string.length - 1);
  }
  
export function AppendCharacter(string, chr) {
    return string + chr;
  }
  
export function PrependCharacter(string, chr) {
    return chr + string;
  }
  
export function TruncateLeft(string) {
    return string.slice(1);
  }
  
export function TruncateRight(string) {
    return string.slice(0, string.length - 1);
  }
  
export function DeleteN(string, n) {
    n = convertN(n);
    return string.slice(0, n) + string.slice(n + 1);
  }
  
export function ExtractRange(string, start, end) {
    start = convertN(start);
    end = convertN(end);
    return string.slice(start, end);
  }
  
export function OmitRange(string, start, end) {
    start = convertN(start);
    end = convertN(end);
    return string.slice(0, start) + string.slice(start + end);
  }
  
export function InsertN(string, n, chr) {
    n = convertN(n);
    return string.slice(0, n) + chr + string.slice(n);
  }
  
export function OverwriteN(string, n, chr) {
    n = convertN(n);
    if (n >= string.length) return string;
    return string.slice(0, n) + chr + string.slice(n + 1);
  }
  
export function TruncateN(string, n) {
    return string.slice(0, n);
  }
  
export function Replace(string, find, replace) {
    return string.replaceAll(find, replace);
  }
  
export function Purge(string, chr) {
    return Replace(string, chr, "");
  }
  
export function DuplicateFirstN(string, n) {
    return DuplicateN(string.charAt(0), n) + string;
  }
  
export function DuplicateLastN(string, n) {
    if (string.length === 0) return string;
    return string + DuplicateN(string.charAt(string.length - 1), n);
  }
  
export function DuplicateAll(string) {
    var result = "";
    var length = string.length;
    for (var i = 0; i < length; i++) {
      result += string.charAt(i) + string.charAt(i);
    }
    return result;
  }
