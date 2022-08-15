const concatArrays = (char, ...arrays) => {
    const newArray = [...arrays].flat().filter((item) => !item.includes(char)).map((strings) => strings.trimEnd())
    return newArray
 }

 export default concatArrays;