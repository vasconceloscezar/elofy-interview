<?php

namespace App\Http\Controllers\API\V1;

use App\Filters\V1\InvoiceFilter;
use App\Http\Resources\V1\InvoiceCollection;
use App\Http\Resources\V1\InvoiceResource;
use App\Models\Invoice;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{

    public function index(Request $request)
    {
        $filter = new InvoiceFilter();
        $queryItems = $filter->transform($request);

        if (count($queryItems) == 0) {
            return new InvoiceCollection(Invoice::paginate());
        } else {
            $customers = Invoice::where($queryItems)->paginate();
            return new InvoiceCollection($customers->appends($request->query()));
        }
    }

    public function show(Invoice $invoice)
    {
        return new InvoiceResource($invoice);
    }

}
