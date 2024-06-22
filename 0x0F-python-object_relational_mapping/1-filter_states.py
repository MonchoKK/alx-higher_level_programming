#!/usr/bin/python3
"""
Lists all the states with a name starting with N (upper)
from the database hbtn_0e_0_usa.
The script takes 3 arguments:
    the username, password, and database name
    i.e. (credentials to access the database)
"""
import sys
import MySQLdb

if __name__ == '__main__':
    # Check if the correct number of arguments is provided
    if len(sys.argv) != 4:
        print("Usage: ./1-filter_states.py <mysql_username> <mysql_password> <database_name>")
        sys.exit(1)

    try:
        # Establish connection to the database
        conn = MySQLdb.connect(
            host="localhost",
            port=3306,
            user=sys.argv[1],
            passwd=sys.argv[2],
            db=sys.argv[3],
            charset="utf8"
        )
        
        # Get cursor (for multiple working envs using the same connection)
        cur = conn.cursor()
        
        # Query the database (using actual SQL queries) for the states
        cur.execute(
            "SELECT id, name FROM states WHERE name LIKE 'N%' ORDER BY id ASC"
        )
        
        # Get query results
        states = cur.fetchall()
        
        # Do something with the results (print them out)
        for state in states:
            print(state)
        
    except MySQLdb.Error as e:
        print(f"Error {e}")
    
    finally:
        # Clean up (close all open connections) once done
        if cur:
            cur.close()
        if conn:
            conn.close()

