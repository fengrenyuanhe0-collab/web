function SolveQuadraticEquation(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
        // 两个不同的实根
        let root1 = (-b + Math.sqrt(delta)) / (2 * a);
        let root2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `两个不同的实根：${root1} 和 ${root2}`;
    } else if (delta === 0) {
        // 两个相同的实根（重根）
        let root = -b / (2 * a);
        return `两个相同的实根：${root}`;
    } else {
        // 复数根（无实根）
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-delta) / (2 * a);
        return `两个复数根：${realPart} + ${imaginaryPart}i 和 ${realPart} - ${imaginaryPart}i`;
    }
}

// 测试示例：解方程 x² - 2x + 1 = 0
console.log(SolveQuadraticEquation(1, -2, 1));

// 再测试一个有两个不同实根的例子：x² - 5x + 6 = 0
console.log(SolveQuadraticEquation(1, -5, 6));

// 测试一个无实根的例子：x² + x + 1 = 0
console.log(SolveQuadraticEquation(1, 1, 1));
