/*
 * Copyright (c) [June 17, 2024] [Mohammed Zain ul Hassan]
 * All rights reserved.
 */
let El1 = document.getElementsByClassName("Score1")[0];
let El2 = document.getElementsByClassName("Score2")[0];
let El3 = document.getElementsByClassName("Score3")[0];

function increment1(cnt){
    let result = Number(El1.textContent) + Number(cnt);
    if(result <10){
    El1.textContent = result;
    }
    else location.href = `winner.html?n=${encodeURIComponent(1)}`;
}

function increment2(cnt){
    let result = Number(El2.textContent) + Number(cnt);
    if(result <10){
    El2.textContent = result;
    }
    else location.href = `winner.html?n=${encodeURIComponent(2)}`;
}

function increment3(cnt){
    let result = Number(El3.textContent) + Number(cnt);
    if(result <10){
    El3.textContent = result;
    }
    else location.href = `winner.html?n=${encodeURIComponent(3)}`;
}