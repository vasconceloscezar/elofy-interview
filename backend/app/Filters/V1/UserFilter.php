<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class UserFilter extends ApiFilter
{
    protected $safeParams = [
        'name' => ['eq'],
        'email' => ['eq'],
    ];

    protected $columnMap = [];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>=',
    ];
}
