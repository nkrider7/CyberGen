import  * as my from "./method"

export default function applyRule(string, rule) {
    if (rule.trim().charAt(0) === "#") return false;
    if (rule.trim().length === 0) return false;
    for (var i = 0; i < rule.length; ) {
      switch (rule.charAt(i)) {
        case ":":
          string = my.Nothing(string);
          i++;
          break;
        case "l":
          string = my.Lowercase(string);
          i++;
          break;
        case "u":
          string = my.Uppercase(string);
          i++;
          break;
        case "c":
          string = my.Capitalize(string);
          i++;
          break;
        case "C":
          string = my.InvertCapitalize(string);
          i++;
          break;
        case "t":
          string = my.ToggleCase(string);
          i++;
          break;
        case "T":
          string = my.TogglePosition(string, rule.charAt(i + 1));
          i += 2;
          break;
        case "r":
          string = my.Reverse(string);
          i++;
          break;
        case "d":
          string = my.Duplicate(string);
          i++;
          break;
        case "p":
          string = my.DuplicateN(string, rule.charAt(i + 1));
          i += 2;
          break;
        case "f":
          string = my.Reflect(string);
          i++;
          break;
        case "{":
          string = my.RotateLeft(string);
          i++;
          break;
        case "}":
          string = my.RotateRight(string);
          i++;
          break;
        case "$":
          string = my.AppendCharacter(string, rule.charAt(i + 1));
          i += 2;
          break;
        case "^":
          string = my.PrependCharacter(string, rule.charAt(i + 1));
          i += 2;
          break;
        case "[":
          string = my.TruncateLeft(string);
          i++;
          break;
        case "]":
          string = my.TruncateRight(string);
          i++;
          break;
        case "D":
          string = my.DeleteN(string, rule.charAt(i + 1));
          i += 2;
          break;
        case "x":
          string = my.ExtractRange(string, rule.charAt(i + 1), rule.charAt(i + 2));
          i += 3;
          break;
        case "O":
          string = my.OmitRange(string, rule.charAt(i + 1), rule.charAt(i + 2));
          i += 3;
          break;
        case "i":
          string = my.InsertN(string, rule.charAt(i + 1), rule.charAt(i + 2));
          i += 3;
          break;
        case "o":
          string = my.OverwriteN(string, rule.charAt(i + 1), rule.charAt(i + 2));
          i += 3;
          break;
        case "'":
          string = my.TruncateN(string, rule.charAt(i + 1));
          i += 2;
          break;
        case "s":
          string = my.Replace(string, rule.charAt(i + 1), rule.charAt(i + 2));
          i += 3;
          break;
        case "@":
          string = my.Purge(string, rule.charAt(i + 1));
          i += 2;
          break;
        case "z":
          string = my.DuplicateFirstN(string, rule.charAt(i + 1));
          i += 2;
          break;
        case "Z":
          string = my.DuplicateLastN(string, rule.charAt(i + 1));
          i += 2;
          break;
        case "q":
          string = my.DuplicateAll(string);
          i++;
          break;
        default:
          i++;
          break;
      }
    }
    return string;
  }