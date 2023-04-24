using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if(context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Cat-Eye Goggles",
                    Description =
                        "Cat Eye Shields are the ultimate in military-grade protective eyewear for cats. Designed to protect your feline friend's eyes during any mission, these goggles are made with the highest quality materials to provide maximum protection against wind, dust, and other potential hazards.",
                    Price = 20000,
                    Handle = "cat-eye-goggles",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fc6e30d1ede73497f655c_11.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Clawed Camo Vest",
                    Description =
                        "Combat Vest is the ultimate in military-grade protection for cats. Made with high-quality and durable materials, this vest provides maximum protection and comfort during any mission.",
                    Price = 20000,
                    Handle = "Clawed-Camo-Vest",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fca265e9c6b861629f239_gear-2.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },         
                new Product
                {
                    Name = "Feline Combat Glasses",
                    Description =
                        "These are powered by our Soho fabric. Officiis amet assumenda totam odio pariatur. Nisi veniam ab odit sit odit delectus assumenda architecto ducimus. Alias maxime enim assumenda occaecati.",
                    Price = 20000,
                    Handle = "feline-combat-glasses",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/64305005f274d5f029f3bd6e_12.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Feline Combat Helmet",
                    Description =
                        "These are powered by our Soho fabric. Officiis amet assumenda totam odio pariatur. Nisi veniam ab odit sit odit delectus assumenda architecto ducimus. Alias maxime enim assumenda occaecati.",
                    Price = 20000,
                    Handle = "feline-combat-helmet",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/64305005f274d5f029f3bd6e_12.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Meowtary Grenade Harness",
                    Description =
                        "Meowtary Grenade Harness is the ultimate accessory for any feline warrior. Designed to hold cat-nip grenades, this belt is made with high-quality and durable materials to ensure maximum protection and functionality.",
                    Price = 20000,
                    Handle = "meowtary-grenade-harness",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/6430547668eac967b24cef83_gren-4.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Purrfect Camo Gear",
                    Description =
                        "The Purrfect Camo Gear is the ultimate tactical outfit for your feline friend. Designed with a camouflage pattern, it provides your cat with the perfect cover for any mission",
                    Price = 20000,
                    Handle = "purrfect-camo-gear",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fca265e9c6b861629f239_gear-2.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Purrtection Helmet",
                    Description =
                        "The Purrtection Helmet is a military-grade headgear designed to keep your cat safe and comfortable during any mission. Made with a durable outer shell and impact-absorbing padding, it provides maximum protection for your feline friend.",
                    Price = 20000,
                    Handle = "purrtection-helmet",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/64304a22b7123f4c3cd3b567_helm-5.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Scratch Sniper Rifle",
                    Description =
                        "The \"Scratch Sniper Rifle\" - a sniper rifle with a built-in scratching post for the cat to use during long-range missions.",
                    Price = 20000,
                    Handle = "scratch-sniper-rifle",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fc9e0fd26aa799293aa68_lknw.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Tactical Climbing Harnesses",
                    Description =
                        "Climbing harnesses and ropes for cats to scale obstacles and buildings.",
                    Price = 20000,
                    Handle = "tactical-climbing-harnesses",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fc9b9a0adeb47509a7825_oinew.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },

                new Product
                {
                    Name = "Tactical Scratching Post",
                    Description =
                        "Tactical scratching posts with hiding spots for cats to practice their stealth and camouflage skills.",
                    Price = 20000,
                    Handle = "tactical-scratching-post",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/643046b6d0882e07ebabfbb2_post-2.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Whisker Warrior Gloves",
                    Description =
                        "Combat Mittens are the ultimate in military-grade protective gloves for cats.",
                    Price = 20000,
                    Handle = "whisker-warrior-gloves",
                    Category = "Tactical Gear",
                    PictureUrl = "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fc72ba0adeb6c479a3f23_12123.png",
                    Brand = "Angular",
                    Type = "Advanced",
                    QuantityInStock = 100
                },

            };

            // context.Products.AddRange(products);

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}