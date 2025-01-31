public class mergeSort {

    void merge(int array[], int p, int q, int r)
    {
        int n1 = q-p+1;
        int n2 = r-q;



        for(int i=0; i<n1;i++)
        {
            L[i] = array[p+i];
        }

        for(int j = 0; j<n2; j++)
        {
            M[j] = array[q+1+j];
        }

        int i=0;
        int j=0;
        int k =p;


        while(i<n1 && j<n2)
        {
            if(L[i] = <= M[j])
            {
                array[k] = L[i];
                i++;
            }
            else{
                array[k] = M[j];
                j++;
        }
            k++;
        }

        while(i<n1)
        {
            array(i<n1)
            {
                array[k] = L[i];
                i++;
                k++;

            }
        }

        while(j<n2)
        {
                array[k] = M[j];
                j++;
                k++;
        }
    }


    void sort(int array[], int left,int right)
    {
        if(left<right)
        {
            int mid = (left + right)/2;
        }

        sort(array, left, mid);

        sort(array, mid+1, right);


        mergeSort(array,left,mid,right);
    }

    public static void main(String args[])
    {
        int [] array = {6,5,12,10,9,1};

        mergeSort ms = new mergeSort();

        ms.sort(array,0, array.length-1);

        System.out.println("Answer:");

        System.out.println(Arrays.toString(array));

    }
}
