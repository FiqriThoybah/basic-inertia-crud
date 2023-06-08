<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Hash;
use Inertia\inertia;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use App\Http\Middleware\HandleInertiaRequest;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $User = user::all();
        return Inertia::render('User', [
            'users' => $User->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'image' => $user->image,
                ];
            }),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateUser');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $post = $this->validate($request, [
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'confirmed'],
            'password_confirmation' => ['required'],
            'image' => ['image', 'mimes:png,jpg,jpeg']
        ]);
        $extFile = $request->image->getClientOriginalExtension();
        $nameFile = 'spa'.time().".".$extFile;
        $image = $request->image->move('images', $nameFile);

        $post["image"] = $image;
        $post["password"] = Hash::make($request->password);
        User::create($post);
        return Redirect::route('users.create');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $Users = User::find($id);
        return Inertia::render('CreateUser',[
            'editUsers' => $Users 
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        
        $put = $this->validate($request, [
            'name' => ['required'],
            'email' => ['required', 'email', Rule::unique('users')->ignore($id)],
            'image' => ['image', 'mimes:png,jpg,jpeg']
        ]);
        $extFile = $request->image->getClientOriginalExtension();
        $nameFile = 'spa'.time().".".$extFile;
        $image = $request->image->move('images', $nameFile);

        $put["image"] = $image;

        User::where('id', $id)->update($put);
        return Redirect::route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $delete = User::find($id);
        $delete->delete();
        return Redirect::route('users.index');
    }
}
