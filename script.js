class MyString extends String {
    reverse() {
        let reversed = this.split('').reverse().join('')
        return reversed
    }

    ucFirst() {
        let arr = this.split('')
        arr[0] = arr[0].toUpperCase()
        return arr.join('')
    }

    ucWords() {
        let arr = this.split(' ')
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length)
        }
        return arr.join(' ')
    }
}

let str = new MyString('abcde');
console.log(str.reverse()); //выведет 'edcba'
console.log(str.ucFirst())
str = new MyString('abcde abcde abcde')
console.log(str.ucWords())
