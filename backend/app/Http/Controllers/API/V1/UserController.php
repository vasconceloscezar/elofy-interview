<?php

namespace App\Http\Controllers;

use App\Filters\V1\UserFilter;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\V1\UserCollection;
use App\Http\Resources\V1\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $filter = new UserFilter();
        $filterItems = $filter->transform($request);

        $users = User::where($filterItems);

        return new UserCollection($users->paginate()->appends($request->query()));
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function store(StoreUserRequest $request)
    {
        return new UserResource(User::create($request->all()));
    }
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->all());
    }

}
