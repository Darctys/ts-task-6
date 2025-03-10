/**
 * Задание 1. Логгирование создание класса
 * Реализуйте декоратор @LogClassInstance который будет логировать создание обьекта в консоль.
 * Формат лога: SimpleCreature created with args : ...${args}
 * Пример: SimpleCreature created with args: Пушок, 12
 */

@LogClassInstance
export class SimpleCreature{
    public readonly name: string;
    public readonly age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
export function LogClassInstance<TFunction extends Function>(target: TFunction): TFunction{

    let Constructor: Function = function(name: string, age: number){
        this.name = name;
        this.age = age;
        console.log(`SimpleCreature created with args: ${name}, ${age}`);
    }

    return <TFunction>Constructor;
}

const men = new SimpleCreature('Tim', 21);
console.log(men.name)

