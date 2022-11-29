<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Notas;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        User::factory()->create([
            'name' => 'Authorized User',
            'email' => 'auth@example.com',
            'password' => 'pass@1234',
            'has_access' => 1
        ]);
        User::factory()->create([
            'name' => 'Unauthorized User',
            'email' => 'unauth@example.com',
            'password' => 'pass@1234',
            'has_access' => 0
        ]);

        Notas::factory()->count(10)->create();

    }
}
