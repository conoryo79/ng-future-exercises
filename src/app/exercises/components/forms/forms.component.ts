import { HttpClient } from '@angular/common/http'
import { Component, input } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule],
})
export class FormsComponent {
  habitos: { name: string; date: Date }[] = []
  message: string = ''
  habitoForm = new FormGroup({
    habito: new FormControl('', [Validators.required, Validators.min(2)]),
  })

  onSubmit() {
    /*  if (this.habitoForm.controls.habito.valid){
      this.message=''
        this.habitos.push(this.habitoForm.value.habito??"")
    }
*/
    if (this.habitoForm.invalid) {
      this.message = 'invalid'
      return
    }
    this.message = ''
    this.habitos.push(this.habitoForm.value.habito ?? '')
  }
}
