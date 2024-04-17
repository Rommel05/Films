for (let i = 1; i <= 7; i++) {
    let triangulo = '';
        if (i % 2 == 0) {
            triangulo += '+'.repeat(i)
        } else {
            triangulo += '#'.repeat(i)
        }
     console.log(triangulo);
}

