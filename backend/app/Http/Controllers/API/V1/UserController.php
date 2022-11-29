<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\Notas;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function index(LoginRequest $request)
    {
        $userEmail =  $request->query('email');

        $foundUser = new User::get();

        return [
            'message' => $foundUser
        ];
    }
}
