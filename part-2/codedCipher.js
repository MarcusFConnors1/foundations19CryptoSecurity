function codedStr(input){
    coded = ''
    for(i = 0; i < input.length; i++){
        switch(input[i]) {
            case 'a':
                coded += 'z';
                break;
            case 'b':
                coded += 'y';
                break;
            case 'c':
                coded += 'x';
                break;
            case 'd':
                coded += 'w';
                break;
            case 'e':
                coded += 'v';
                break;
            case 'f':
                coded += 'u';
                break;
            case 'g':
                coded += 't';
                break;
            case 'h':
                coded += 's';
                break;
            case 'i':
                coded += 'r';
                break;
            case 'j':
                coded += 'q';
                break;
            case 'k':
                coded += 'p';
                break;
            case 'l':
                coded += 'o';
                break;
            case 'm':
                coded += 'n';
                break;
            case 'n':
                coded += 'm';
                break;
            case 'o':
                coded += 'l';
                break;
            case 'p':
                coded += 'k';
                break;
            case 'q':
                coded += 'j';
                break;
            case 'r':
                coded += 'i';
                break;
            case 's':
                coded += 'h';
                break;
            case 't':
                coded += 'g';
                break;
            case 'u':
                coded += 'f';
                break;
            case 'v':
                coded += 'e';
                break;
            case 'w':
                coded += 'd';
                break;
            case 'x':
                coded += 'c';
                break;
            case 'y':
                coded += 'b';
                break;
            case 'z':
                coded += 'a';
                break;
        }
    }
    return coded
}

function decodedStr(input) {
    coded = ''
    for(i = 0; i < input.length; i++){
        switch(input[i]) {
            case 'a':
                coded += 'z';
                break;
            case 'b':
                coded += 'y';
                break;
            case 'c':
                coded += 'x';
                break;
            case 'd':
                coded += 'w';
                break;
            case 'e':
                coded += 'v';
                break;
            case 'f':
                coded += 'u';
                break;
            case 'g':
                coded += 't';
                break;
            case 'h':
                coded += 's';
                break;
            case 'i':
                coded += 'r';
                break;
            case 'j':
                coded += 'q';
                break;
            case 'k':
                coded += 'p';
                break;
            case 'l':
                coded += 'o';
                break;
            case 'm':
                coded += 'n';
                break;
            case 'n':
                coded += 'm';
                break;
            case 'o':
                coded += 'l';
                break;
            case 'p':
                coded += 'k';
                break;
            case 'q':
                coded += 'j';
                break;
            case 'r':
                coded += 'i';
                break;
            case 's':
                coded += 'h';
                break;
            case 't':
                coded += 'g';
                break;
            case 'u':
                coded += 'f';
                break;
            case 'v':
                coded += 'e';
                break;
            case 'w':
                coded += 'd';
                break;
            case 'x':
                coded += 'c';
                break;
            case 'y':
                coded += 'b';
                break;
            case 'z':
                coded += 'a';
                break;
        }
    }
    return coded
}

console.log(codedStr("hello"))
console.log(decodedStr('svool'))