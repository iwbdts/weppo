"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tuple = ["tesla", "model 3", "model X", "model Y"];
const tupleNumber = [1, 2, 3, 4];
const tupleMix = [1, "2", 3, "4"];
//T extends readonly any[] : typ T musi być niemutowalną listą (czegokolwiek)
//T extends readonly (string|number|symbol)[] : typ T musi być niemutowalną listą stringów lub liczb lub symboli
//P in T[number] : "for each element type in the tuple T,
//create a property with that element type as the key (P)."
