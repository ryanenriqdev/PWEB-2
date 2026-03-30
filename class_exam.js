class Exam {
    constructor(weight, correctAnswers) {
        this.weight = weight;
        this.correctAnswers = correctAnswers;
        this.studentsAnswers = [];

    }

    add(studentAnswers) {
        this.studentsAnswers.push(studentAnswers);
    }

    avg() {
        somatorio = 0
        for (let student of this.studentsAnswers) {
            let soma = student.reduce((acumulador, valor) => acumulador + valor, 0)
            somatorio += soma
        }
        return somatorio / this.studentsAnswers.length
    }

    medias() {
        let medias = []
        
        for ()
    }

    min(q_notas) {

    }
}

const pw2 = new Exam([2, 4, 4], ['a', 'd', 'b']);

pw2.add(['b', 'b', 'b']);

// Média das notas
pw2.avg();

// Vetor com três menores notas
pw2.min(3); 

// Vetor com cinco maiores notas
pw2.max(5);

// Vetor com todas as notas menores do que 5,0
pw2.lt(5);

// Vetor com todas as notas maiores do que 7,0
pw2.gt(7);
