export default function replaceSpecialChars(str) {
    str = str.replace(/[àáâãäå]/,'a');
    str = str.replace(/[ÀÁÂÃÄÅ]/,'A');
    str = str.replace(/[èéêẽë]/,'e');
    str = str.replace(/[ÈÉÊẼË]/,'E');
    str = str.replace(/[ìíîĩï]/,'i');
    str = str.replace(/[ÌÍÎĨÏ]/,'I');
    str = str.replace(/[òóôõö]/,'o');
    str = str.replace(/[ÒÓÔÕÖ]/,'O');
    str = str.replace(/[ùúûũü]/,'u');
    str = str.replace(/[ÙÚÛŨÜ]/,'U');
    str = str.replace(/[ç]/,'c');
    str = str.replace(/[Ç]/,'C');

    return str.replace(/[^a-z0-9]/gi,'').toLowerCase().trim(); 
}