import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { EventHandling } from './components/EventHandling.jsx'
import { EventProps } from './components/EventProps.jsx'
import { State } from './components/Hooks/State.jsx'
import { Practise } from './components/Hooks/Practise.jsx'
import { LiftingState } from './components/LiftingState.jsx'
import { ToggleSwitch } from './components/Projects/ToggleSwitch/ToggleSwitch.jsx'
import { Todo } from './components/Projects/Todo/Todo.jsx'
import { Challenge } from './components/Hooks/Challenge.jsx'
import { RegistrationForm } from './components/Hooks/RegistrationForm.jsx'
import { RegistrationFormInReact } from './components/Hooks/RegistrationFormInReact.jsx'
import { LoginForm } from './components/Hooks/LoginForm.jsx'
import { ContactForm } from './components/Hooks/ContactForm.jsx'
import { UseEffectInReact } from './components/Hooks/UseEffectHook/UseEffectReact.jsx'
import { FetchApi } from './components/Hooks/UseEffectHook/FetchApi.jsx'
import { UseReff } from './components/Hooks/UserRefHook/index.jsx'
import { UseId } from './components/Hooks/useIdHook/index.jsx'
import { PropsDrilling } from './components/PropsDrilling.jsx'
import { Main } from './components/Hooks/ContextApi/index.jsx'
import { ReducerComp } from './components/Hooks/UseReducerHook/index.jsx'
import { ReactMemo } from './components/Hooks/Memo/ReactMemo.jsx'
import { MemoParentComp } from './components/Hooks/Memo/UseMemo.jsx'
import { InputBoxValue } from './components/InputBoxValue.jsx'
import { HideAndShowElement } from './components/HideAndShowElement.jsx'
import { BasicForm } from './components/BasicForm.jsx'
import { ArrayListHandle } from './components/ArrayListHandle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <ArrayListHandle/>
  </StrictMode>

)
