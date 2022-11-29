<?php

namespace App\Http\Controllers\API\V1;

use App\Filters\V1\CustomerFilter;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Http\Resources\V1\CustomerCollection;
use App\Http\Resources\V1\CustomerResource;
use App\Models\Customer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{

    public function index(Request $request)
    {
        $userName = 'cezar';
        $password = 'pass@12345';

        $reqUser = $request->query('username');
        $reqPassword = $request->query('password');

        $returnMessage = [
            'message' => ''
        ];

        if (!$reqUser || !$reqPassword) {
            $returnMessage['message'] = 'Invalid params';
        } else if ($reqUser != $userName) {
            $returnMessage['message'] = 'Invalid Username';
        } else if ($reqPassword != $password) {
            $returnMessage['message'] = 'Invalid Password';
        } else {
            $returnMessage['message'] = 'Logged!';
        }

        return $returnMessage;


    }

    public function show(Customer $customer)
    {
        $includeInvoices = request()->query('includeInvoices');
        if ($includeInvoices) {
            return new CustomerResource($customer->loadMissing('invoices'));
        }
        return new CustomerResource($customer);
    }

    public function store(StoreCustomerRequest $request)
    {
        return new CustomerResource(Customer::create($request->all()));
    }
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        $customer->update($request->all());
    }

}
