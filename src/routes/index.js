import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import { View } from '../screen/home'
import { Login } from '../screen/login'
import { ClientRegister } from '../screen/register'
import { Dashboard } from '../screen/dashboard'
import { Mealplan } from '../screen/mealplan'
import { Myprofile } from '../screen/myprofile'
import { WorkoutCalendar } from '../screen/workoutcalendar'
import { Mygoals } from '../screen/mygoals'
import { Workout } from '../screen/workout'
import { Meditation } from '../screen/meditation'
import { Nutrition } from '../screen/nutrition'
import { Breathing } from '../screen/breathing'
import { Subsciptions } from '../screen/subsciptions'
import { Hydration } from '../screen/hydration'
import { Weight } from '../screen/weight'
import { Sleepwake } from '../screen/sleepwake'
import { Checkout } from '../screen/checkout'





export default ()=>(
    <BrowserRouter basename="/annex">
        <Route path="/" exact component={View} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={ClientRegister} />
        <Route path="/dashboard" exact component={Dashboard} /> 
        <Route path="/mealplan" exact component={Mealplan} /> 
        <Route path="/myprofile" exact component={Myprofile} /> 
        <Route path="/workoutcalendar" exact component={WorkoutCalendar} />
        <Route path="/mygoals" exact component={Mygoals} />
        <Route path="/workout" exact component={Workout} />
        <Route path="/meditation" exact component={Meditation} />
        <Route path="/nutrition" exact component={Nutrition} />
        <Route path="/breathing" exact component={Breathing} />
        <Route path="/subsciptions" exact component={Subsciptions} />
        <Route path="/hydration" exact component={Hydration} />
        <Route path="/weight" exact component={Weight} />
        <Route path="/sleepwake" exact component={Sleepwake} />
        <Route path="/checkout" exact component={Checkout} />
    </BrowserRouter>
)

