<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::get('/home', [HomeController::class, "index"]);

Route::get('/home', function (){
    return Inertia::render('Home');
})->name('home');

// Route::inertia('/home', 'Home');

Route::resource('/users', UserController::class);

Route::get('users/create', function (){
    return Inertia::render('CreateUser');
})->name('users.create');
Route::post('/user/post', [UserController::class, 'store'])->name('users.post');