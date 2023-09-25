function falsePosition(func, a, b, tolerance, maxIterations) {
    let iteration = 0;
    let root = a;

    const iterationsTable = document.getElementById("iterations");

    while (iteration < maxIterations) {
        const fa = func(a);
        const fb = func(b);

        root = (((a * fb) - (b * fa)) / (fb - fa));
        const froot = func(root);

        const newRow = iterationsTable.insertRow(-1);
        newRow.innerHTML = `<td>${iteration + 1}</td><td>${a.toFixed(6)}</td><td>${b.toFixed(6)}</td><td>${root.toFixed(6)}</td><td>${fa.toFixed(6)}</td><td>${fb.toFixed(6)}</td><td>${froot.toFixed(6)}</td>`;

        if (Math.abs(froot) < tolerance) {
            break;
        }

        if (froot * fa < 0) {
            b = root;
        } else {
            a = root;
        }

        iteration++;
    }
    return root;
}

function findRoot() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const tolerance = parseFloat(document.getElementById("tolerance").value);
    const equation = document.getElementById("equation").value;


    const iterationsTable = document.getElementById("iterations");
    iterationsTable.innerHTML = "<tr><th>Iteration</th><th>a</th><th>b</th><th>Root</th><th>f(a)</th><th>f(b)</th><th>f(root)</th></tr>";


    document.getElementById("equationOutput").textContent = `The given Equation is: ${equation}`;

    const func = new Function('x', `return ${equation};`);
    const maxIterations = 10;

    const result = falsePosition(func, a, b, tolerance, maxIterations);

    document.getElementById("result").textContent = result.toFixed(6);
}

