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
Route::get('/home', [HomeController::class, "index"]);

// --use Inertia Methode--
// Route::get('/home', function (){
//     return Inertia::render('Home');
// })->name('home');

// Route::inertia('/home', 'Home');
// ------------------------

Route::resource('/users', UserController::class);

// Route::get('users/create', function (){
//     return Inertia::render('CreateUser');
// })->name('users.create');
// Route::post('/user/post', [UserController::class, 'store'])->name('users.post');

// Route::get('users')->name('users')->uses('UserController');

Route::inertia('/posting', 'Posting/Posting');

Route::inertia('/posting/approver', 'Posting/Approver')->name('posting.approver');
Route::inertia('/finnet', 'Finnet/index');
Route::inertia('/manage-rekon', 'ManageRekon/index');
Route::inertia('/audit-trial', 'AuditTrial/index');
Route::inertia('/file-management', 'FileManagement/index');
Route::inertia('/user-management', 'UserManagement/index');
Route::inertia('/user-rights', 'UserRights/index');