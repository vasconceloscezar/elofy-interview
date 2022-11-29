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

class CustomerController extends Controller
{

    public function index(Request $request)
    {
        $filter = new CustomerFilter();
        $filterItems = $filter->transform($request);

        $includeInvoices = $request->query('includeInvoices');
        $customers = Customer::where($filterItems);
        if ($includeInvoices) {
            $customers = $customers->with('invoices');
        }
        return new CustomerCollection($customers->paginate()->appends($request->query()));
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

    public function login(Request $request)
    {

    }
}
