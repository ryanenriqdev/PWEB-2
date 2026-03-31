class Exam {
    constructor(weight, correctAnswers) {
        this.weight = weight; // [2, 4, 4]
        this.correctAnswers = correctAnswers; //['a', 'd', 'b']
        this.studentsAnswers = []; // [['a', 'b', 'c'], ['b', 'c', 'd'], ['a', 'a', 'a'], ['b', 'a', 'c']]

    }

    add(studentAnswers) {
        this.studentsAnswers.push(studentAnswers);
    }

    avg() {
        let somatorio = 0
        for (let student in this.studentsAnswers) {
            let nota_aluno = 0
            for (let i in this.correctAnswers) {
                if (this.correctAnswers[i] == this.studentsAnswers[student][i]) {
                    nota_aluno += this.weight[i]
                }
            }
           somatorio = somatorio + nota_aluno
        }
        return somatorio / this.studentsAnswers.length
    }

    notas() {
        let notas = [];
        for (let student in this.studentsAnswers) {
            let nota_aluno = 0;
            for (let i in this.correctAnswers) {
                if(this.correctAnswers[i] == this.studentsAnswers[student][i]) {
                    nota_aluno = nota_aluno + this.weight[i];
                }
            }
            notas.push(nota_aluno);
        }
        return notas
    }

    min(q_notas) {
        let notas = this.notas();
        let notas_invertidas = notas.toSorted((a, b) => a - b);

        if ( q_notas <= notas.length ){
            return notas_invertidas.slice(0, q_notas);
        } else {
            return notas_invertidas;
        }
    }

    
    max(q_notas) {
        let notas = this.notas();
        let notas_ordenadas = notas.toSorted((a, b) => a - b).toReversed();
        
        if (q_notas <= notas.length) {
            return notas_ordenadas.slice(0, q_notas);
        } else {
            return notas_ordenadas;
        }
    }

    lt(nota_corte) {
        let notas = this.notas();
        let menores = notas.filter((nota) => nota < nota_corte);
        return menores
    }

    gt(nota_corte) {
        let notas = this.notas();
        let maiores = notas.filter((nota) => nota > nota_corte)
        return maiores
    }


}

const pw2 = new Exam([2, 4, 4], ['a', 'd', 'b']);

pw2.add(['b', 'b', 'b']); // nota: 4
pw2.add(['a', 'b', 'c']); // nota: 2
pw2.add(['a', 'a', 'a']); // nota: 2
pw2.add(['a', 'd', 'b']); // nota: 10

// Vetor com a média das notas
console.log('Média de todas as notas:', pw2.avg());

// Vetor com todas as notas
console.log('Todas as notas:', pw2.notas()); 

// // Vetor com três menores notas
console.log('Três menores notas:', pw2.min(3)); 

// // Vetor com cinco maiores notas
console.log('Cinco maiores Notas:', pw2.max(5));

// // Vetor com todas as notas menores do que 5,0
console.log('Notas menores que o corte:', pw2.lt(5));

// // Vetor com todas as notas maiores do que 7,0
console.log('Notas maiores que o corte:', pw2.gt(7));
