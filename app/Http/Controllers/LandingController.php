<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    //
    public function home() {
        return Inertia::render('Landing/Home/View',[]);
    }

    public function contactUs() {
        return Inertia::render('Landing/Contact/View',[]);
    }

    public function login() {
        // dd(12);
        return Inertia::render('Landing/Login/View',[]);
    }
    public function profile() {
        return Inertia::render('Landing/Profile/View',[]);
    }
    public function companyDetail() {
        return Inertia::render('Landing/CompanyDetails/View',[]);
    }
    public function privacy() {
        return Inertia::render('Landing/Privacy/View',[]);
    }
    public function terminology() {
        return Inertia::render('Landing/Terminology/View',[]);
    }
}
