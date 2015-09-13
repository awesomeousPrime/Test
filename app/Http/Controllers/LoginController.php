<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{

    /**
     * Constructor method
     */
    public function __construct()
    {

    }

    /**
     * Method for login page
     *
     * @return bool
     */
    public function index()
    {
        return view('home');
    }

    /**
     * This method will handle the login request and validate if user information is correct
     *
     * @param   Request     $request    Array which should have the following:
     *                                  username
     *                                  password
     * @return string       JSON Response
     *                      status:
     *                          OK      if successful
     *                          ERROR   if validation has failed
     *                      code:
     *                          200     successful
     *                          403     unauthorized
     *                      message     Message will contain more detailed information on if failed
     */
    public function validate(Request $request)
    {
        $username = $request->username;
        $password = $request->password;

        if (empty($username) || empty($password)) {
            return ['status' => 'ERROR', 'code' => 403, 'message' => 'Empty Field(s)'];
        }

        /** @var User $user */
        if ($user = User::where('username', '=', '')) {

        }
    }

}
