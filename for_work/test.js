function is_numeric(str){
    return /^\d+$/.test(str);
}

console.log(is_numeric("123"));
console.log(is_numeric("klsdjf"));
console.log(is_numeric("dfs12dsds"));