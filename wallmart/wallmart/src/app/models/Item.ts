export class Item{
    productId!: number;
    title!: string;
    image!: string;
    price!: number
    rating!: number;
    ratingTotal!: number;
    shippingDays!: number;


    public setTitle(title:string){
        this.title=title;
    }
    public setProductID(productId:number){
        this.productId=productId;
    }
    public setImageUrl(image:string){
        this.image=image;
    }
    public setPrice(price:number){
        this.price=price;
    }
    public setShippingDays(shippingDays:number){
        this.shippingDays=shippingDays;
    }
    public setRatings(rating:number){
        this.rating=rating;
    }
    public setTotalRatings(ratingTotal:number){
        this.ratingTotal=ratingTotal;
    }
}