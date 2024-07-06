import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question-service.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  currentQuestion: any;
  currentQuestionIndex: number | undefined;
  feedback: string | undefined;
  showNextButton: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.currentQuestionIndex = +this.route.snapshot.paramMap.get('id');
    this.loadQuestion();
  }

  loadQuestion(): void {
    const questions = this.questionService.getQuestions();
    this.currentQuestion = questions[this.currentQuestionIndex];
  }

  selectAnswer(option: string): void {
    if (option === this.currentQuestion.correctAnswer) {
      this.feedback = '¡Correcto!';
    } else {
      this.feedback = 'Incorrecto. La respuesta correcta es ' + this.currentQuestion.correctAnswer;
    }
    this.showNextButton = true;
  }

  nextQuestion(): void {
    const questions = this.questionService.getQuestions();
    if (this.currentQuestionIndex + 1 < questions.length) {
      this.currentQuestionIndex++;
      this.router.navigate(['/question', this.currentQuestionIndex]);
    } else {
      this.router.navigate(['/results']);
    }
    this.showNextButton = false;
    this.feedback = '';
  }
}
