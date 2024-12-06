const body = document.body;

const mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";
body.append(mainDiv);

        const orderdLi = document.createElement('ol');
        orderdLi.className = "orederedList";
        mainDiv.append(orderdLi);


                const theList1 = document.createElement("li");
                theList1.className = "list";
                orderdLi.append(theList1);

                const theList2 = document.createElement("li");
                theList2.className = "list";
                orderdLi.append(theList2);

                const theList3 = document.createElement("li");
                theList3.className = "list";
                orderdLi.append(theList3);


        const unOrderdLi = document.createElement('ul');
        unOrderdLi.className = "unOrederedList";
        mainDiv.append(unOrderdLi);

                const theList4 = document.createElement("li");
                theList4.className = "list";
                unOrderdLi.append(theList4);

                const theList5 = document.createElement("li");
                theList5.className = "list";
                unOrderdLi.append(theList5);

                const theList6 = document.createElement("li");
                theList6.className = "list";
                unOrderdLi.append(theList6);

theList5.remove();







